import { PatientController } from '@/app/controllers/patient-controller'
import { Router } from 'express'
import { isAuthenticated } from '../helpers/is-authenticated'

const getPatientByPhoneRouter = Router()
const patientController = new PatientController()

getPatientByPhoneRouter.get(
  '/patients/:phone',
  isAuthenticated,
  patientController.show,
)

export { getPatientByPhoneRouter }
