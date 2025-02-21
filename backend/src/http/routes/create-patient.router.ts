import { PatientController } from '@/app/controllers/patient-controller'
import { Router } from 'express'

const createPatientRouter = Router()
const patientController = new PatientController()

createPatientRouter.post('/patients', patientController.create)

export { createPatientRouter }
