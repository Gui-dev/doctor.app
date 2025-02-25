import type { IUsersRepositoryContract } from '@/app/contracts/repositories/users/users-repository-contract'
import type { IAuthenticatePatientDTO } from '@/app/dtos/authenticate-patient-DTO'
import { comparePassword } from '@/app/helpers/bcrypt-helper'
import { encodeToBase64 } from '@/app/helpers/encode-to-base64'

export class AuthenticatePatientUseCase {
  constructor(private usersRepository: IUsersRepositoryContract) {}

  public async execute({ phone, password }: IAuthenticatePatientDTO) {
    const user = await this.usersRepository.getUserByPhone(phone)

    if (!user) {
      throw new Error('Phone or Password invalid')
    }

    const isPasswordValid = await comparePassword(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Phone or Password invalid')
    }

    const payload = {
      user: {
        id: user.id,
        phone: user.phone,
      },
    }
    const token = encodeToBase64(JSON.stringify(payload))

    return {
      token,
    }
  }
}
