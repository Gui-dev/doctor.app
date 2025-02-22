import type { Schedule } from '@prisma/client'

export interface IScheduleUpdateProps {
  schedule_id: string
  available: boolean
}

export interface ISchedulesRepositoryContract {
  getScheduleById: (schedule_id: string) => Promise<Schedule | null>
  update: (data: IScheduleUpdateProps) => Promise<Schedule>
}
