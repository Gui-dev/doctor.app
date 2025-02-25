import { AuthenticateController } from '@/app/controllers/authenticate-controller'
import { Router } from 'express'

const authenticateRouter = Router()
const authenticateController = new AuthenticateController()

authenticateRouter.post('/sessions', authenticateController.store)

export { authenticateRouter }
