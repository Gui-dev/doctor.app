import type { Request, Response } from 'express'

export interface IPatientController {
  show: (request: Request, response: Response) => Promise<void>
}
