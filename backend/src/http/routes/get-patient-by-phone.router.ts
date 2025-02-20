import { PatientController } from '@/app/controllers/patient-controller'
import { Router } from 'express'

const getPatientByPhoneRouter = Router()
const patientController = new PatientController()

getPatientByPhoneRouter.get('/patients/', patientController.show)

export { getPatientByPhoneRouter }
