import z from 'zod'

export const authenticateValidation = z.object({
  phone: z.string().min(11),
  password: z.string().min(6),
})

export type AuthenticateData = z.infer<typeof authenticateValidation>
