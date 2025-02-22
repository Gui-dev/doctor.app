import type { Request, Response } from 'express'

import type { IAppointmentControllerContract } from '../contracts/controllers/appointment-controller'
import { AppointmentsRepository } from '../repositories/appointments/appointments-repository'
import { PatientsRepository } from '../repositories/patients/patients-repository'
import { SchedulesRepository } from '../repositories/schedules/schedules-repository'
import { CreateAppointmentUseCase } from '../use-cases/appointments/create-appointment'
import {
  createAppointmentValidationBody,
  createAppointmentValidationParams,
} from '../validations/appointments/create-appointment-validation'

export class AppointmentController implements IAppointmentControllerContract {
  public async create(request: Request, response: Response): Promise<void> {
    const { patient_id } = createAppointmentValidationParams.parse(
      request.params,
    )
    const { schedule_id } = createAppointmentValidationBody.parse(request.body)

    const patientsRepository = new PatientsRepository()
    const schedulesRepository = new SchedulesRepository()
    const appointmentsRepository = new AppointmentsRepository()
    const createAppointmentUseCase = new CreateAppointmentUseCase(
      patientsRepository,
      schedulesRepository,
      appointmentsRepository,
    )
    const appointment = await createAppointmentUseCase.execute({
      patient_id,
      schedule_id,
    })

    response.status(201).json(appointment)
  }
}
