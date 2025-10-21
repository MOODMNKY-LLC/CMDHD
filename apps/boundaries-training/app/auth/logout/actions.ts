'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  // Force revalidation of the layout to refresh auth state
  revalidatePath('/', 'layout')
  
  // Redirect to login page
  redirect('/auth/login')
}

