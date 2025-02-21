import type { IPatientsRepositoryContract } from '@/app/contracts/repositories/patients/patients-repository-contract'
import type { ICreatePatientDTO } from '@/app/dtos/create-patient-DTO'
import { prisma } from '@/http/shared/prisma'
import type { Patient } from '@prisma/client'

export class PatientsRepository implements IPatientsRepositoryContract {
  public async getPatientByPhone(
    phone: string,
    appointments = false,
  ): Promise<Patient | null> {
    const patient = await prisma.patient.findUnique({
      where: {
        phone,
      },
      include: {
        appointments,
      },
    })

    return patient
  }

  public async createPatient({
    user_id,
    name,
    phone,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = await prisma.patient.create({
      data: {
        user_id,
        name,
        phone,
      },
    })

    return patient
  }
}
