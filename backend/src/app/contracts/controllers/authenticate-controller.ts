import type { Request, Response } from 'express'

export interface IAuthenticateControllerContract {
  store: (request: Request, response: Response) => Promise<void>
}
