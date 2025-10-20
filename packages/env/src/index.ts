import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  APP_ENV: z.string().default('local'),
  NEXT_PUBLIC_SITE_NAME: z.string().min(1).default('CMDHD')
})

export type Env = z.infer<typeof schema>

export function loadEnv(): Env {
  const parsed = schema.safeParse(process.env)
  if (!parsed.success) {
    const formatted = parsed.error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join('\n')
    throw new Error(`Invalid environment variables:\n${formatted}`)
  }
  return parsed.data
}
