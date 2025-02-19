import type { IDoctosRepositoryContract } from '@/app/contracts/repositories/doctors-repository-contract'

export class ListDoctorUseCase {
  constructor(private doctosRepository: IDoctosRepositoryContract) {}

  public async execute() {
    const doctors = await this.doctosRepository.listDoctors()

    if (!doctors) {
      throw new Error('Doctors not found')
    }

    return {
      doctors,
    }
  }
}
