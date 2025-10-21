import { createClient } from '@/lib/supabase/server'
import type { Profile, ParticipantProgress, Feedback } from '@/lib/types/database'

/**
 * Get the current user's profile
 */
export async function getUserProfile(): Promise<Profile | null> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return data
}

/**
 * Get the current user's training progress
 */
export async function getUserProgress(): Promise<ParticipantProgress | null> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('participant_progress')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error) {
    console.error('Error fetching progress:', error)
    return null
  }

  return data
}

/**
 * Get the current user's feedback (if submitted)
 */
export async function getUserFeedback(): Promise<Feedback | null> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .eq('user_id', user.id)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    console.error('Error fetching feedback:', error)
  }

  return data
}

/**
 * Get the user's initials for avatar fallback
 */
export function getUserInitials(name: string | null, email: string): string {
  if (name) {
    const parts = name.trim().split(/\s+/)
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }
  
  // Fallback to email
  return email.substring(0, 2).toUpperCase()
}

/**
 * Calculate training completion percentage
 */
export function calculateCompletionPercentage(progress: ParticipantProgress | null): number {
  if (!progress) return 0

  const totalItems = 10 // Total trackable items:
  // - 6 polls (scenarios)
  // - 2 reflections (story + emotion)
  // - 1 commitment
  // - 1 feedback

  const completedItems =
    Math.min(progress.polls_answered, 6) +
    Math.min(progress.story_reflections, 1) +
    Math.min(progress.emotion_reflections, 1) +
    Math.min(progress.commitments, 1) +
    (progress.feedback_submitted ? 1 : 0)

  return Math.round((completedItems / totalItems) * 100)
}

/**
 * Check if training is complete
 */
export function isTrainingComplete(progress: ParticipantProgress | null): boolean {
  if (!progress) return false

  return (
    progress.polls_answered >= 6 &&
    progress.story_reflections >= 1 &&
    progress.emotion_reflections >= 1 &&
    progress.commitments >= 1 &&
    progress.feedback_submitted
  )
}

/**
 * Get user's reflection by type
 */
export async function getUserReflection(type: 'story' | 'emotion' | 'commitment'): Promise<string | null> {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('reflections')
    .select('content')
    .eq('user_id', user.id)
    .eq('reflection_type', type)
    .single()

  if (error || !data) return null
  return data.content
}

/**
 * Get user's poll responses
 */
export async function getUserPollResponses() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('poll_responses')
    .select('poll_id, selected_option, is_correct')
    .eq('user_id', user.id)
    .order('poll_id')

  if (error) {
    console.error('Error fetching poll responses:', error)
    return []
  }

  return data || []
}

