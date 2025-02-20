import type { IDoctosRepositoryContract } from '@/app/contracts/repositories/doctors/doctors-repository-contract'

export class GetDoctorByIdUseCase {
  constructor(private doctosRepository: IDoctosRepositoryContract) {}

  public async execute(id: string) {
    const INCLUDE_SCHEDULES = true
    const doctor = await this.doctosRepository.getDoctorById(
      id,
      INCLUDE_SCHEDULES,
    )

    if (!doctor) {
      throw new Error('Doctor not found')
    }

    return {
      doctor,
    }
  }
}
