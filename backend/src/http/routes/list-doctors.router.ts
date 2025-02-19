import { DoctorsController } from '@/app/controllers/doctors-controller'
import { Router } from 'express'

const listDoctorRouter = Router()
const doctorsController = new DoctorsController()

listDoctorRouter.get('/doctors', doctorsController.list)

export { listDoctorRouter }
