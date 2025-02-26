import type { ICreatePatientDTO } from '@/app/dtos/create-patient-DTO'
import type { Patient } from '@prisma/client'

export interface IPatientsRepositoryContract {
  getPatientById: (
    id: string,
    appointments?: boolean,
  ) => Promise<Patient | null>

  getPatientByPhone: (
    phone: string,
    appointments?: boolean,
    doctors?: boolean,
  ) => Promise<Patient | null>

  create: (data: ICreatePatientDTO) => Promise<Patient>
}
