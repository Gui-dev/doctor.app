import type { Request, Response } from 'express'

import { DoctorsRepository } from '@/app/repositories/doctors/doctors-repository'
import type { IDoctorsController } from '../contracts/controllers/doctors-controller'
import { GetDoctorByIdUseCase } from '../use-cases/doctor/get-doctor-by-id'
import { ListDoctorUseCase } from '../use-cases/doctor/list-doctor'

export class DoctorsController implements IDoctorsController {
  public async show(request: Request, response: Response) {
    const { id } = request.params
    const doctorRepository = new DoctorsRepository()
    const getDoctorByIdUseCase = new GetDoctorByIdUseCase(doctorRepository)
    const doctor = await getDoctorByIdUseCase.execute(id)

    response.status(200).json(doctor)
  }

  public async list(request: Request, response: Response) {
    const doctorRepository = new DoctorsRepository()
    const doctorUseCase = new ListDoctorUseCase(doctorRepository)
    const doctors = await doctorUseCase.execute()

    response.status(200).json(doctors)
  }
}
