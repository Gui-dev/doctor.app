import type { Request, Response } from 'express'
import type { IAuthenticateControllerContract } from '../contracts/controllers/authenticate-controller'
import { UsersRepository } from '../repositories/users/users-repository'
import { AuthenticatePatientUseCase } from '../use-cases/patient/authenticate-patient'
import { authenticateValidation } from '../validations/authenticates/authenticate-validation'

export class AuthenticateController implements IAuthenticateControllerContract {
  public async store(request: Request, response: Response): Promise<void> {
    const { phone, password } = authenticateValidation.parse(request.body)
    const usersRepository = new UsersRepository()
    const authenticatePatientUseCase = new AuthenticatePatientUseCase(
      usersRepository,
    )
    const session = await authenticatePatientUseCase.execute({
      phone,
      password,
    })

    response.status(201).json(session)
  }
}
