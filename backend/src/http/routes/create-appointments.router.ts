import { AppointmentController } from '@/app/controllers/appointment-controller'

import { Router } from 'express'
import { isAuthenticated } from '../helpers/is-authenticated'

const createAppointmentRouter = Router()
const appointmentController = new AppointmentController()

createAppointmentRouter.post(
  '/patients/:patient_id/appointments',
  isAuthenticated,
  appointmentController.create,
)

export { createAppointmentRouter }
