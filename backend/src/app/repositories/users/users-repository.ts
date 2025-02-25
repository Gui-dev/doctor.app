import type { IUsersRepositoryContract } from '@/app/contracts/repositories/users/users-repository-contract'
import type { ICreateUserDTO } from '@/app/dtos/create-user-DTO'
import { prisma } from '@/http/shared/prisma'
import type { User } from '@prisma/client'

export class UsersRepository implements IUsersRepositoryContract {
  public async getUserByPhone(phone: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        phone,
      },
      include: {
        patients: true,
      },
    })

    return user
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
