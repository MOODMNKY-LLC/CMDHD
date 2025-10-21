'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function signUp(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const repeatPassword = formData.get('repeatPassword') as string

  // Validate passwords match
  if (password !== repeatPassword) {
    return { error: 'Passwords do not match' }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  // Redirect to success page
  redirect('/auth/sign-up-success')
}

