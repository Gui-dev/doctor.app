import type { IDoctosRepositoryContract } from '@/app/contracts/repositories/doctors/doctors-repository-contract'
import { prisma } from '@/http/shared/prisma'

export class DoctorsRepository implements IDoctosRepositoryContract {
  public async getDoctorById(id: string, schedules = false) {
    const doctor = await prisma.doctor.findUnique({
      where: {
        id,
      },
      include: {
        schedules,
      },
    })

    return doctor
  }

  public async listDoctors() {
    const doctors = await prisma.doctor.findMany()
    return doctors
  }
}
