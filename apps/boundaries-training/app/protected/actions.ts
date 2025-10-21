'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { ProfileUpdate, FeedbackSubmission, DemographicsUpdate } from '@/lib/types/database'

/**
 * Update user profile
 */
export async function updateProfile(data: ProfileUpdate) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', user.id)

  if (error) {
    console.error('Error updating profile:', error)
    return { error: 'Failed to update profile' }
  }

  revalidatePath('/protected')
  return { success: true }
}

/**
 * Submit or update feedback
 */
export async function submitFeedback(data: FeedbackSubmission) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  // Check if feedback already exists
  const { data: existingFeedback } = await supabase
    .from('feedback')
    .select('id')
    .eq('user_id', user.id)
    .single()

  let error

  if (existingFeedback) {
    // Update existing feedback
    const result = await supabase
      .from('feedback')
      .update(data)
      .eq('user_id', user.id)
    error = result.error
  } else {
    // Insert new feedback
    const result = await supabase
      .from('feedback')
      .insert({ ...data, user_id: user.id })
    error = result.error
  }

  if (error) {
    console.error('Error submitting feedback:', error)
    return { error: 'Failed to submit feedback' }
  }

  revalidatePath('/protected')
  return { success: true }
}

/**
 * Mark training as complete
 */
export async function markTrainingComplete() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('profiles')
    .update({ completed_at: new Date().toISOString() })
    .eq('id', user.id)

  if (error) {
    console.error('Error marking training complete:', error)
    return { error: 'Failed to mark training complete' }
  }

  revalidatePath('/protected')
  return { success: true }
}

/**
 * Update user demographics
 */
export async function updateDemographics(data: DemographicsUpdate) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', user.id)

  if (error) {
    console.error('Error updating demographics:', error)
    return { error: 'Failed to update demographics' }
  }

  revalidatePath('/protected')
  return { success: true }
}

/**
 * Submit a reflection (story, emotion, or commitment)
 */
export async function submitReflection(data: {
  reflection_type: 'story' | 'emotion' | 'commitment'
  content: string
  slide_id?: number
}) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  // Check if reflection of this type already exists
  const { data: existing } = await supabase
    .from('reflections')
    .select('id')
    .eq('user_id', user.id)
    .eq('reflection_type', data.reflection_type)
    .single()

  let error

  if (existing) {
    // Update existing reflection
    const result = await supabase
      .from('reflections')
      .update({ content: data.content, slide_id: data.slide_id })
      .eq('id', existing.id)
    error = result.error
  } else {
    // Insert new reflection
    const result = await supabase
      .from('reflections')
      .insert({ ...data, user_id: user.id })
    error = result.error
  }

  if (error) {
    console.error('Error submitting reflection:', error)
    return { error: 'Failed to submit reflection' }
  }

  revalidatePath('/protected')
  return { success: true }
}

/**
 * Submit a poll response
 */
export async function submitPollResponse(data: {
  poll_id: number
  selected_option: number
  is_correct?: boolean
}) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('poll_responses')
    .upsert(
      { 
        user_id: user.id,
        poll_id: data.poll_id,
        selected_option: data.selected_option,
        is_correct: data.is_correct
      },
      { onConflict: 'user_id,poll_id' }
    )

  if (error) {
    console.error('Error submitting poll response:', error)
    return { error: 'Failed to submit poll response' }
  }

  revalidatePath('/protected')
  return { success: true }
}

