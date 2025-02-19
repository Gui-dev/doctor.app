import { prisma } from '@/http/shared/prisma'
import type { IDoctosRepositoryContract } from '../contracts/repositories/doctors-repository-contract'

export class DoctorsRepository implements IDoctosRepositoryContract {
  public async listDoctors() {
    const doctors = await prisma.doctor.findMany()
    return doctors
  }
}
