import z from 'zod'

export const getPatientByPhoneValidation = z.object({
  phone: z.string().min(11),
})

export type GetPatientByPhoneData = z.infer<typeof getPatientByPhoneValidation>
