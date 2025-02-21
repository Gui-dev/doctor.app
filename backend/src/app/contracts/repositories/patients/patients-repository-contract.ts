import type { ICreatePatientDTO } from '@/app/dtos/create-patient-DTO'
import type { Patient } from '@prisma/client'

export interface IPatientsRepositoryContract {
  getPatientByPhone: (
    phone: string,
    appointments?: boolean,
  ) => Promise<Patient | null>

  createPatient: (data: ICreatePatientDTO) => Promise<Patient>
}
