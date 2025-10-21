-- Note: Using gen_random_uuid() which is built-in to PostgreSQL 13+
-- No extension needed

-- ============================================================================
-- PROFILES TABLE
-- Extends auth.users with training-specific information
-- ============================================================================
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  department text,
  role text,
  avatar_url text,
  training_year integer not null default extract(year from now())::integer,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Demographic fields for research data
  years_experience text,
  primary_role text,
  counties_served jsonb default '[]'::jsonb,
  license_certification text,
  previous_training boolean default false,
  previous_training_year integer
);

-- RLS Policies for profiles
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- ============================================================================
-- POLL RESPONSES TABLE
-- Tracks participant responses to scenario-based polls
-- ============================================================================
create table public.poll_responses (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  poll_id integer not null, -- Maps to presentation slide ID
  selected_option integer not null, -- 0-based index of selected answer
  is_correct boolean, -- Optional: whether the response was correct
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, poll_id) -- One response per poll per user
);

-- RLS Policies for poll_responses
alter table public.poll_responses enable row level security;

create policy "Users can view own poll responses"
  on public.poll_responses for select
  using (auth.uid() = user_id);

create policy "Users can insert own poll responses"
  on public.poll_responses for insert
  with check (auth.uid() = user_id);

create policy "Users can update own poll responses"
  on public.poll_responses for update
  using (auth.uid() = user_id);

-- ============================================================================
-- REFLECTIONS TABLE
-- Stores participant reflections and commitment statements
-- ============================================================================
create table public.reflections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  reflection_type text not null check (reflection_type in ('story', 'emotion', 'commitment')),
  content text not null,
  slide_id integer, -- Optional: which slide prompted this reflection
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies for reflections
alter table public.reflections enable row level security;

create policy "Users can view own reflections"
  on public.reflections for select
  using (auth.uid() = user_id);

create policy "Users can insert own reflections"
  on public.reflections for insert
  with check (auth.uid() = user_id);

create policy "Users can update own reflections"
  on public.reflections for update
  using (auth.uid() = user_id);

create policy "Users can delete own reflections"
  on public.reflections for delete
  using (auth.uid() = user_id);

-- ============================================================================
-- FEEDBACK TABLE
-- Stores training evaluation and feedback
-- ============================================================================
create table public.feedback (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  rating integer check (rating >= 1 and rating <= 5),
  most_valuable text, -- Which learning objective was most valuable
  questions_remaining text, -- What boundary challenges they still have questions about
  improvement_suggestions text, -- What would improve the training
  one_word_takeaway text, -- One word describing what they're leaving with
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id) -- One feedback submission per user
);

-- RLS Policies for feedback
alter table public.feedback enable row level security;

create policy "Users can view own feedback"
  on public.feedback for select
  using (auth.uid() = user_id);

create policy "Users can insert own feedback"
  on public.feedback for insert
  with check (auth.uid() = user_id);

create policy "Users can update own feedback"
  on public.feedback for update
  using (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, created_at, updated_at)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    now(),
    now()
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to automatically create profile on signup
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger handle_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger handle_reflections_updated_at
  before update on public.reflections
  for each row execute procedure public.handle_updated_at();

-- ============================================================================
-- INDEXES for performance
-- ============================================================================
create index poll_responses_user_id_idx on public.poll_responses(user_id);
create index reflections_user_id_idx on public.reflections(user_id);
create index reflections_type_idx on public.reflections(reflection_type);
create index feedback_user_id_idx on public.feedback(user_id);
create index profiles_primary_role_idx on public.profiles(primary_role);
create index profiles_years_experience_idx on public.profiles(years_experience);

-- ============================================================================
-- VIEWS for analytics (admin only - not exposed to participants)
-- ============================================================================

-- Training completion statistics
create or replace view public.training_stats as
select
  count(distinct p.id) as total_participants,
  count(distinct case when p.completed_at is not null then p.id end) as completed_count,
  count(distinct pr.user_id) as participants_with_poll_responses,
  count(distinct r.user_id) as participants_with_reflections,
  count(distinct f.user_id) as participants_with_feedback,
  round(avg(f.rating), 2) as average_rating
from public.profiles p
left join public.poll_responses pr on p.id = pr.user_id
left join public.reflections r on p.id = r.user_id
left join public.feedback f on p.id = f.user_id
where p.training_year = extract(year from now())::integer;

-- Individual participant progress
create or replace view public.participant_progress as
select
  p.id as user_id,
  p.full_name,
  p.department,
  p.primary_role,
  p.years_experience,
  p.counties_served,
  p.license_certification,
  p.previous_training,
  p.completed_at,
  count(distinct pr.poll_id) as polls_answered,
  count(distinct r.id) filter (where r.reflection_type = 'story') as story_reflections,
  count(distinct r.id) filter (where r.reflection_type = 'emotion') as emotion_reflections,
  count(distinct r.id) filter (where r.reflection_type = 'commitment') as commitments,
  case when f.id is not null then true else false end as feedback_submitted
from public.profiles p
left join public.poll_responses pr on p.id = pr.user_id
left join public.reflections r on p.id = r.user_id
left join public.feedback f on p.id = f.user_id
where p.training_year = extract(year from now())::integer
group by p.id, p.full_name, p.department, p.primary_role, p.years_experience, 
         p.counties_served, p.license_certification, p.previous_training, p.completed_at, f.id;

-- Grant access to authenticated users for their own data
grant usage on schema public to authenticated;
grant all on public.profiles to authenticated;
grant all on public.poll_responses to authenticated;
grant all on public.reflections to authenticated;
grant all on public.feedback to authenticated;
grant select on public.participant_progress to authenticated;

