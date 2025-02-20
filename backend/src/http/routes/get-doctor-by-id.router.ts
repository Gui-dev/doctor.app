import { DoctorsController } from '@/app/controllers/doctors-controller'
import { Router } from 'express'

const getDoctorByIdRouter = Router()
const doctorsController = new DoctorsController()

getDoctorByIdRouter.get('/doctors/:id', doctorsController.show)

export { getDoctorByIdRouter }
