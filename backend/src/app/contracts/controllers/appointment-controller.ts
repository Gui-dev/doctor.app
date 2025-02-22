import type { Request, Response } from 'express'

export interface IAppointmentControllerContract {
  create: (request: Request, response: Response) => Promise<void>
}
