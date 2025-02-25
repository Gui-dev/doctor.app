import type { ICreateUserDTO } from '@/app/dtos/create-user-DTO'
import type { User } from '@prisma/client'

export interface IUsersRepositoryContract {
  getUserByPhone: (phone: string) => Promise<User | null>
  create: (data: ICreateUserDTO) => Promise<User>
}
