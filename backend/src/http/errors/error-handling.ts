import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { HTTP_STATUS_CODE } from '../helpers/http-status-code'
import { BadRequestError } from './bad-request-error'
import { BusinessError } from './business-error'
import { NotFoundError } from './not-found-error'
import { UnauthorizedError } from './unauthorized-error'

export const errorHandling = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  let statusCode = HTTP_STATUS_CODE.OK

  if (error instanceof NotFoundError) {
    statusCode = HTTP_STATUS_CODE.NOT_FOUND
  }

  if (error instanceof BadRequestError) {
    statusCode = HTTP_STATUS_CODE.BAD_REQUEST
  }

  if (error instanceof BusinessError) {
    statusCode = HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY
  }

  if (error instanceof UnauthorizedError) {
    statusCode = HTTP_STATUS_CODE.UNAUTHORIZED
  }

  if (error instanceof ZodError) {
    statusCode = HTTP_STATUS_CODE.BAD_REQUEST
  }

  response.status(statusCode).json({ error: error.message })
}
