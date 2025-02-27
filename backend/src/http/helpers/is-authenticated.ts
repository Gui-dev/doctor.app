import { decodeFromBase64 } from '@/app/helpers/encode-to-base64'
import type { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../errors/bad-request-error'
import { HTTP_STATUS_CODE } from './http-status-code'

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (!request.headers.authorization) {
    const message = new BadRequestError('Missing authorization token')
    response.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: message })
    return
  }

  const token = request.headers.authorization.split(' ')[1]
  const user = decodeFromBase64(token)

  if (!user) {
    const message = new BadRequestError('Invalid token')
    response.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({ error: message })
    return
  }

  next()
}
