import type { ICreateAppointmentDTO } from '@/app/dtos/create-appointment-DTO'
import type { Appointment } from '@prisma/client'

export interface IAppointmentsRepositoryContract {
  create: (data: ICreateAppointmentDTO) => Promise<Appointment>
}
