import type { IAppointmentsRepositoryContract } from '@/app/contracts/repositories/appointments/appointments-repository'
import type { IPatientsRepositoryContract } from '@/app/contracts/repositories/patients/patients-repository-contract'
import type { ISchedulesRepositoryContract } from '@/app/contracts/repositories/schedules/schedules-repository'

interface ICreateAppointmentUseCaseProps {
  patient_id: string
  schedule_id: string
}

export class CreateAppointmentUseCase {
  constructor(
    private patientsRepository: IPatientsRepositoryContract,
    private schedulesRepository: ISchedulesRepositoryContract,
    private appointmentsRepository: IAppointmentsRepositoryContract,
  ) {}

  public async execute({
    patient_id,
    schedule_id,
  }: ICreateAppointmentUseCaseProps) {
    const patient = await this.patientsRepository.getPatientById(patient_id)

    if (!patient) {
      throw new Error('Patient not found')
    }

    const scheduleExists =
      await this.schedulesRepository.getScheduleById(schedule_id)

    if (!scheduleExists || !scheduleExists.available) {
      throw new Error('Schedule not available for this date')
    }

    const schedule = await this.schedulesRepository.update({
      schedule_id: scheduleExists.id,
      available: false,
    })

    const appointment = await this.appointmentsRepository.create({
      patient_id: patient_id,
      doctor_id: schedule.doctor_id,
      date: schedule.date,
    })

    return {
      appointment,
    }
  }
}
