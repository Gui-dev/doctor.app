import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import 'express-async-errors'

import { listDoctorRouter } from './routes/list-doctors.router'

export class App {
  app: express.Express

  constructor() {
    this.app = express()
    this.app.use(cors())
    this.app.use(helmet())
    this.app.use(express.json())

    this.setRoutes()
  }

  public start(port: number) {
    this.app.listen(port, () => {
      console.log(`🔥 Server running on port ${port}`)
    })
  }

  private setRoutes() {
    this.app.use(listDoctorRouter)
  }
}
