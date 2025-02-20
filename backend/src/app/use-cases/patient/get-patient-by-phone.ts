import type { IPatientsRepositoryContract } from '@/app/contracts/repositories/patients/patients-repository-contract'

export class GetPatientByPhoneUseCase {
  constructor(private patientsRepository: IPatientsRepositoryContract) {}

  public async execute(phone: string) {
    const INCLUDE_APPOINTMENTS = true
    const patient = await this.patientsRepository.getPatientByPhone(
      phone,
      INCLUDE_APPOINTMENTS,
    )

    if (!patient) {
      throw new Error('Patient not found')
    }

    return {
      patient,
    }
  }
}
