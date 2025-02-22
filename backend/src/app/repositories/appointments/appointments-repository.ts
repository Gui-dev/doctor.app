import type { IAppointmentsRepositoryContract } from '@/app/contracts/repositories/appointments/appointments-repository'
import type { ICreateAppointmentDTO } from '@/app/dtos/create-appointment-DTO'
import { prisma } from '@/http/shared/prisma'
import type { Appointment } from '@prisma/client'

export class AppointmentsRepository implements IAppointmentsRepositoryContract {
  public async create({
    patient_id,
    doctor_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = await prisma.appointment.create({
      data: {
        patient_id,
        doctor_id,
        date,
      },
    })

    return appointment
  }
}
