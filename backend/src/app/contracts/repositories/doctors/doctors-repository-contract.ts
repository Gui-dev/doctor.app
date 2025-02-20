import type { Doctor } from '@prisma/client'

export interface IDoctosRepositoryContract {
  getDoctorById: (id: string, schedules: boolean) => Promise<Doctor | null>
  listDoctors: () => Promise<Doctor[]>
}
