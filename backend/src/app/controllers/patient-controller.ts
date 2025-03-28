import type { Request, Response } from 'express'

import type { IPatientController } from '../contracts/controllers/patient-controller'
import { PatientsRepository } from '../repositories/patients/patients-repository'
import { UsersRepository } from '../repositories/users/users-repository'
import { CreatePatientUseCase } from '../use-cases/patient/create-patient'
import { GetPatientByPhoneUseCase } from '../use-cases/patient/get-patient-by-phone'
import { createPatientValidation } from '../validations/patients/create-patient-validation'
import { getPatientByPhoneValidation } from '../validations/patients/get-patient-by-phone-validation'

export class PatientController implements IPatientController {
  public async create(request: Request, response: Response): Promise<void> {
    const { name, password, phone } = createPatientValidation.parse(
      request.body,
    )
    const userRepository = new UsersRepository()
    const patientRepository = new PatientsRepository()
    const createPatientUseCase = new CreatePatientUseCase(
      userRepository,
      patientRepository,
    )

    const patient = await createPatientUseCase.execute({
      name,
      password,
      phone,
    })

    response.status(201).json(patient)
  }

  public async show(request: Request, response: Response): Promise<void> {
    const { phone } = getPatientByPhoneValidation.parse(request.params)
    const patientRepository = new PatientsRepository()
    const getPatientByPhoneUseCase = new GetPatientByPhoneUseCase(
      patientRepository,
    )
    const patient = await getPatientByPhoneUseCase.execute(phone)

    response.status(200).json(patient)
  }
}
