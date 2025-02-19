import { App } from '@/http/app'

const app = new App()
const PORT = Number(process.env.PORT) || 3333

const init = () => {
  app.start(PORT)
}

init()
