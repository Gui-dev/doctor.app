import type { Request, Response } from 'express'

export interface IDoctorsController {
  list: (request: Request, response: Response) => Promise<void>
  show: (request: Request, response: Response) => Promise<void>
}
