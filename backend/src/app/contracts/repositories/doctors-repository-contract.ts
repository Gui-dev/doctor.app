import type { Doctor } from '@prisma/client'

export interface IDoctosRepositoryContract {
  listDoctors: () => Promise<Doctor[]>
}
