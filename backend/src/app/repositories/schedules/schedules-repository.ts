import type {
  IScheduleUpdateProps,
  ISchedulesRepositoryContract,
} from '@/app/contracts/repositories/schedules/schedules-repository'
import { prisma } from '@/http/shared/prisma'
import type { Schedule } from '@prisma/client'

export class SchedulesRepository implements ISchedulesRepositoryContract {
  public async getScheduleById(schedule_id: string): Promise<Schedule | null> {
    const schedule = await prisma.schedule.findUnique({
      where: {
        id: schedule_id,
      },
    })

    return schedule
  }

  public async update({
    schedule_id,
    available,
  }: IScheduleUpdateProps): Promise<Schedule> {
    const schedule = await prisma.schedule.update({
      where: {
        id: schedule_id,
      },
      data: {
        available,
      },
    })

    return schedule
  }
}
