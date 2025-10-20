"use client"
import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from './button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border border-black/10 dark:border-white/10"
    >
      {isDark ? 'Light' : 'Dark'}
    </Button>
  )
}
