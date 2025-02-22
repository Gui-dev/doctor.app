import { AppointmentController } from '@/app/controllers/appointment-controller'

import { Router } from 'express'

const createAppointmentRouter = Router()
const appointmentController = new AppointmentController()

createAppointmentRouter.post(
  '/patients/:patient_id/appointments',
  appointmentController.create,
)

export { createAppointmentRouter }
