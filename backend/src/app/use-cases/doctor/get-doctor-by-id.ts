import type { IDoctosRepositoryContract } from '@/app/contracts/repositories/doctors/doctors-repository-contract'
import { NotFoundError } from '@/http/errors/not-found-error'

export class GetDoctorByIdUseCase {
  constructor(private doctosRepository: IDoctosRepositoryContract) {}

  public async execute(id: string) {
    const INCLUDE_SCHEDULES = true
    const doctor = await this.doctosRepository.getDoctorById(
      id,
      INCLUDE_SCHEDULES,
    )

    if (!doctor) {
      throw new NotFoundError('Doctor not found')
    }

    return {
      doctor,
    }
  }
}
