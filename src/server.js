import app from "./app.js"
import { envConfig } from "./config/env.config.js"
import { connectDB } from "./config/database.config.js"

const startServer = async () =>{

  await connectDB()

  app.listen(envConfig.port, () => {
    console.log(`Servidor escuchando en http://localhost:${envConfig.port}`)
  })
}

startServer()