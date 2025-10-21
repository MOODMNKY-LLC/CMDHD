# Supabase CLI Workflow Guide

## Overview
Now that your local environment is linked to your Supabase project (`xglsqtyulbvblxbdbcyc`), you can use the Supabase CLI to manage your database, migrations, and local development.

---

## ✅ What You've Accomplished

1. ✅ **Linked** local environment to remote Supabase project
2. ✅ **Applied** database migration (`20251021_create_profile_schema.sql`)
3. ✅ **Created** the following tables in production:
   - `profiles` - User profiles with demographics
   - `poll_responses` - Scenario poll answers
   - `reflections` - Story, emotion, and commitment reflections
   - `feedback` - Training evaluation feedback

---

## 🎯 Common Supabase CLI Commands

### Database Migrations

#### **Push Local Migrations to Remote**
```bash
cd apps/boundaries-training
supabase db push
```
- Applies local migration files to remote database
- Prompts for confirmation before applying
- Use this when you create new migrations locally

#### **Pull Remote Schema to Local**
```bash
supabase db pull
```
- Generates migration files from current remote schema
- Useful if changes were made via Supabase Dashboard
- Creates a new migration file in `supabase/migrations/`

#### **Check Migration Status**
```bash
supabase migration list
```
- Shows which migrations have been applied
- Indicates status of local vs remote

#### **View Schema Differences**
```bash
supabase db diff --schema public
```
- Shows differences between local and remote schema
- Helps identify drift before pushing changes

---

## 🔧 Local Development

### **Start Local Supabase Stack**
```bash
supabase start
```
- Starts local PostgreSQL, Auth, Storage, etc.
- Useful for development without affecting production
- Runs on different ports (54321 for API)

### **Stop Local Stack**
```bash
supabase stop
```

### **Reset Local Database**
```bash
supabase db reset
```
- Drops and recreates local database
- Reapplies all migrations
- Useful for clean slate testing

---

## 📊 Database Management

### **Open Database in Browser**
```bash
supabase db start
```
Then visit: https://supabase.com/dashboard/project/xglsqtyulbvblxbdbcyc/editor

### **Connect to Remote Database (psql)**
```bash
supabase db remote psql
```
- Opens PostgreSQL shell to your remote database
- Direct SQL access for queries and debugging

### **Run SQL Commands**
```bash
supabase db execute --remote "SELECT * FROM profiles LIMIT 5;"
```
- Execute SQL directly against remote database
- Useful for quick queries

---

## 🔍 Inspecting Your Current Schema

### **View All Tables**
```sql
-- Via psql
supabase db remote psql

-- Then run:
\dt
```

### **View Table Structure**
```sql
-- In psql
\d profiles
\d poll_responses
\d reflections
\d feedback
```

### **Check Row Level Security Policies**
```sql
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public';
```

---

## 🚀 Typical Workflow

### **Scenario 1: Making Schema Changes**

1. **Create New Migration**
   ```bash
   supabase migration new add_feature_name
   ```
   - Creates empty migration file with timestamp

2. **Edit Migration File**
   - Add your SQL changes
   - Include both `CREATE` and `DROP` statements for reversibility

3. **Test Locally** (optional)
   ```bash
   supabase db reset  # Apply all migrations locally
   ```

4. **Push to Production**
   ```bash
   supabase db push
   ```

### **Scenario 2: Someone Changed Schema via Dashboard**

1. **Pull Changes**
   ```bash
   supabase db pull
   ```
   - Generates migration file from remote changes

2. **Review Generated Migration**
   - Check `supabase/migrations/[timestamp]_remote_schema.sql`
   - Verify changes are expected

3. **Commit Migration**
   ```bash
   git add supabase/migrations/
   git commit -m "feat: Pull schema changes from dashboard"
   ```

### **Scenario 3: Checking What Will Be Applied**

1. **Check Differences**
   ```bash
   supabase db diff --schema public
   ```

2. **Review Migration Files**
   ```bash
   ls -la supabase/migrations/
   ```

3. **Preview Migration SQL**
   ```bash
   cat supabase/migrations/20251021_create_profile_schema.sql
   ```

---

## 📋 Current Schema Status

### **Tables Created:**

#### `profiles`
```sql
- id (uuid, FK to auth.users)
- full_name, department, role, avatar_url
- training_year, completed_at
- Demographics: years_experience, primary_role, counties_served, 
  license_certification, previous_training
- RLS enabled (users can only view/update own profile)
```

#### `poll_responses`
```sql
- id (uuid)
- user_id (FK to profiles)
- poll_id (integer, maps to slide ID)
- selected_option (integer, 0-based index)
- is_correct (boolean)
- UNIQUE constraint on (user_id, poll_id)
- RLS enabled
```

#### `reflections`
```sql
- id (uuid)
- user_id (FK to profiles)
- reflection_type (story | emotion | commitment)
- content (text)
- slide_id (integer, optional)
- RLS enabled
```

#### `feedback`
```sql
- id (uuid)
- user_id (FK to profiles)
- rating (1-5)
- most_valuable, questions_remaining, 
  improvement_suggestions, one_word_takeaway
- RLS enabled
```

### **Functions Created:**
- `handle_updated_at()` - Automatically updates `updated_at` timestamps

### **Triggers Created:**
- Update triggers on all tables for timestamp management

### **Views Created:**
- `training_stats` - Aggregate training statistics
- `participant_progress` - Individual participant completion tracking

---

## 🧪 Testing Your Schema

### **Verify Tables Exist**
```bash
supabase db remote psql
```
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'poll_responses', 'reflections', 'feedback');
```

### **Check RLS Policies**
```sql
SELECT tablename, policyname 
FROM pg_policies 
WHERE schemaname = 'public';
```

### **Test Profile Creation**
Your app should automatically create profiles via the auth trigger.

---

## 🔐 Security Considerations

### **Row Level Security (RLS)**
All tables have RLS enabled. Users can only:
- View their own data
- Update their own data
- Insert their own data

### **Auth Integration**
- Uses `auth.uid()` for user identification
- Profiles automatically created on user signup
- Foreign keys ensure data integrity

---

## 🐛 Troubleshooting

### **Migration Failed**
```bash
# Check migration status
supabase migration list

# View detailed logs
supabase db push --debug
```

### **Schema Drift Detected**
```bash
# Pull remote changes
supabase db pull

# Or force push if local is correct
supabase db push --dry-run  # Preview changes
supabase db push            # Apply changes
```

### **Can't Connect to Remote**
```bash
# Re-link project
supabase link --project-ref xglsqtyulbvblxbdbcyc
```

### **Need to Rollback**
```bash
# Create rollback migration manually
supabase migration new rollback_feature_name

# Add DROP/ALTER statements to undo changes
# Then push
supabase db push
```

---

## 📱 Next Steps for Your App

### **1. Test the Application**
```bash
cd apps/boundaries-training
pnpm dev
```

Visit: `http://localhost:3001`

### **2. Verify User Flow**
1. Sign up a test user
2. Check profile is created automatically
3. Complete demographics form
4. Submit reflections
5. Answer scenario polls
6. Make commitment
7. Submit feedback

### **3. Check Data in Supabase Dashboard**
Visit: https://supabase.com/dashboard/project/xglsqtyulbvblxbdbcyc/editor

Tables to check:
- `auth.users` - Authentication records
- `public.profiles` - User profiles
- `public.poll_responses` - Scenario answers
- `public.reflections` - Reflections and commitments
- `public.feedback` - Training evaluations

### **4. Monitor Usage**
Dashboard > Logs:
- Database logs
- API logs
- Auth logs

---

## 🎓 Best Practices

### **Migration Management**
1. ✅ One migration per feature
2. ✅ Descriptive migration names
3. ✅ Include rollback steps in comments
4. ✅ Test locally before pushing
5. ✅ Commit migrations to git

### **Schema Changes**
1. ✅ Always use migrations (don't edit schema directly)
2. ✅ Include RLS policies for new tables
3. ✅ Add appropriate indexes for performance
4. ✅ Document complex queries in migrations

### **Development Workflow**
1. ✅ Develop locally when possible
2. ✅ Use `supabase db reset` for fresh starts
3. ✅ Pull remote changes regularly
4. ✅ Keep migrations in sync with git

---

## 🔗 Useful Links

- **Supabase Dashboard**: https://supabase.com/dashboard/project/xglsqtyulbvblxbdbcyc
- **Database Editor**: https://supabase.com/dashboard/project/xglsqtyulbvblxbdbcyc/editor
- **API Docs**: https://supabase.com/dashboard/project/xglsqtyulbvblxbdbcyc/api
- **CLI Reference**: https://supabase.com/docs/reference/cli/introduction

---

## 📊 Current Project Status

✅ **Database Schema**: Deployed to production
✅ **Tables**: profiles, poll_responses, reflections, feedback
✅ **RLS Policies**: Configured and active
✅ **Functions & Triggers**: Deployed
✅ **Views**: training_stats, participant_progress

🎯 **Ready for**: Production use!

---

## Summary

You now have:
1. ✅ A fully deployed database schema
2. ✅ Local environment linked to production
3. ✅ Migration files version controlled
4. ✅ All tables, policies, and triggers in place
5. ✅ Ready to test the full application flow

Your training application is ready to collect real participant data! 🎉

