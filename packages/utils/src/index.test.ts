import { describe, it, expect } from 'vitest'
import { cn } from './index'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', undefined, 'b', false, 'c')).toBe('a b c')
  })
})
