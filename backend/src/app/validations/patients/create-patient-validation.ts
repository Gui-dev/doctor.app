import z from 'zod'

export const createPatientValidation = z.object({
  name: z.string().min(1),
  password: z.string().min(6),
  phone: z.string().min(11),
})

export type CreatePatientData = z.infer<typeof createPatientValidation>
