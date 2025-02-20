import type { Request, Response } from 'express'

import type { IPatientController } from '../contracts/controllers/patient-controller'
import { PatientsRepository } from '../repositories/patients/patients-repository'
import { GetPatientByPhoneUseCase } from '../use-cases/patient/get-patient-by-phone'

export class PatientController implements IPatientController {
  public async show(request: Request, response: Response): Promise<void> {
    const { phone } = request.body
    const patientRepository = new PatientsRepository()
    const getPatientByPhoneUseCase = new GetPatientByPhoneUseCase(
      patientRepository,
    )
    const patient = await getPatientByPhoneUseCase.execute(phone)

    response.status(200).json(patient)
  }
}
