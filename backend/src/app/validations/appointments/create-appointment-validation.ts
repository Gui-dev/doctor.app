import z from 'zod'

export const createAppointmentValidationParams = z.object({
  patient_id: z.string().uuid(),
})

export const createAppointmentValidationBody = z.object({
  schedule_id: z.string().uuid(),
})

export type CreateAppointmentBodyData = z.infer<
  typeof createAppointmentValidationBody
>

export type CreateAppointmentParamsData = z.infer<
  typeof createAppointmentValidationParams
>
