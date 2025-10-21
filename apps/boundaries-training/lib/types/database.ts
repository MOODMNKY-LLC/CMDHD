// Database types for the training profile system

export interface Profile {
  id: string
  full_name: string | null
  department: string | null
  role: string | null
  avatar_url: string | null
  training_year: number
  completed_at: string | null
  created_at: string
  updated_at: string
  // Demographic fields for research
  years_experience: string | null
  primary_role: string | null
  counties_served: string[] | null
  license_certification: string | null
  previous_training: boolean | null
  previous_training_year: number | null
}

export interface PollResponse {
  id: string
  user_id: string
  poll_id: number
  selected_option: number
  is_correct: boolean | null
  submitted_at: string
}

export interface Reflection {
  id: string
  user_id: string
  reflection_type: 'story' | 'emotion' | 'commitment'
  content: string
  slide_id: number | null
  submitted_at: string
  updated_at: string
}

export interface Feedback {
  id: string
  user_id: string
  rating: number | null
  most_valuable: string | null
  questions_remaining: string | null
  improvement_suggestions: string | null
  one_word_takeaway: string | null
  submitted_at: string
}

export interface ParticipantProgress {
  user_id: string
  full_name: string | null
  department: string | null
  primary_role: string | null
  years_experience: string | null
  counties_served: string[] | null
  license_certification: string | null
  previous_training: boolean | null
  completed_at: string | null
  polls_answered: number
  story_reflections: number
  emotion_reflections: number
  commitments: number
  feedback_submitted: boolean
}

// Helper type for profile updates
export interface ProfileUpdate {
  full_name?: string
  department?: string
  role?: string
  avatar_url?: string
}

// Helper type for demographics update
export interface DemographicsUpdate {
  full_name?: string
  department?: string
  years_experience?: string
  primary_role?: string
  counties_served?: string[]
  license_certification?: string
  previous_training?: boolean
  previous_training_year?: number
}

// Helper type for feedback submission
export interface FeedbackSubmission {
  rating?: number
  most_valuable?: string
  questions_remaining?: string
  improvement_suggestions?: string
  one_word_takeaway?: string
}

