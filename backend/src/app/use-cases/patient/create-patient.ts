import type { IPatientsRepositoryContract } from '@/app/contracts/repositories/patients/patients-repository-contract'
import type { IUsersRepositoryContract } from '@/app/contracts/repositories/users/users-repository-contract'
import { hashPassword } from '@/app/helpers/bcrypt-helper'
import { BadRequestError } from '@/http/errors/bad-request-error'

interface ICreatePatientProps {
  name: string
  password: string
  phone: string
}

export class CreatePatientUseCase {
  constructor(
    private usersRepository: IUsersRepositoryContract,
    private patientsRepository: IPatientsRepositoryContract,
  ) {}

  public async execute({ name, password, phone }: ICreatePatientProps) {
    const patientExists = await this.patientsRepository.getPatientByPhone(phone)

    if (patientExists) {
      throw new BadRequestError('Patient already exists with this phone number')
    }

    const hashedPassword = await hashPassword(password)
    const user = await this.usersRepository.create({
      phone,
      password: hashedPassword,
    })
    const patient = await this.patientsRepository.create({
      user_id: user.id,
      name,
      phone,
    })

    return {
      patient_id: patient.id,
    }
  }
}
