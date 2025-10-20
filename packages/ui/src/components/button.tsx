import * as React from 'react'
import { cn } from '@cmdhd/utils'

export type ButtonProps = React.ComponentProps<'button'>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-9 px-4 py-2 bg-black text-white dark:bg-white dark:text-black',
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
