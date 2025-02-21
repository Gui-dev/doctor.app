import type { Request, Response } from 'express'

export interface IPatientController {
  show: (request: Request, response: Response) => Promise<void>
  create: (request: Request, response: Response) => Promise<void>
  createAppointment: (request: Request, response: Response) => Promise<void>
}
