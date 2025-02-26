import type { IDoctosRepositoryContract } from '@/app/contracts/repositories/doctors/doctors-repository-contract'
import { NotFoundError } from '@/http/errors/not-found-error'

export class ListDoctorUseCase {
  constructor(private doctosRepository: IDoctosRepositoryContract) {}

  public async execute() {
    const doctors = await this.doctosRepository.listDoctors()

    if (!doctors) {
      throw new NotFoundError('Doctors not found')
    }

    return {
      doctors,
    }
  }
}
