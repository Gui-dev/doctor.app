import type { Patient } from '@prisma/client'

export interface IPatientsRepositoryContract {
  getPatientByPhone: (
    phone: string,
    appointments: boolean,
  ) => Promise<Patient | null>
}
