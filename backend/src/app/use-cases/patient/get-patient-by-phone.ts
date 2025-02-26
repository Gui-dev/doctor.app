import type { IPatientsRepositoryContract } from '@/app/contracts/repositories/patients/patients-repository-contract'
import { NotFoundError } from '@/http/errors/not-found-error'

export class GetPatientByPhoneUseCase {
  constructor(private patientsRepository: IPatientsRepositoryContract) {}

  public async execute(phone: string) {
    const INCLUDE_APPOINTMENTS = true
    const INCLUDE_DOCTORS = true
    const patient = await this.patientsRepository.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENTS,
      INCLUDE_DOCTORS,
    )

    if (!patient) {
      throw new NotFoundError('Patient not found')
    }

    return {
      patient,
    }
  }
}
