import type { Request, Response } from 'express'
import type { IDoctorsController } from '../contracts/controllers/doctors-controller'
import { DoctorsRepository } from '../repositories/doctors-repository'
import { ListDoctorUseCase } from '../use-cases/doctor/list-doctor'

export class DoctorsController implements IDoctorsController {
  public async list(request: Request, response: Response) {
    const doctorRepository = new DoctorsRepository()
    const doctorUseCase = new ListDoctorUseCase(doctorRepository)
    const doctors = await doctorUseCase.execute()

    response.status(200).json(doctors)
  }
}
