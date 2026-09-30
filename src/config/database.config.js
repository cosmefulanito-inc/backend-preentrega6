import mongoose from "mongoose"
import {envConfig} from "./env.config.js"

export const connectDB = async () => {
    try {
        await mongoose.connect(envConfig.mongoUri)
    } catch (error) {
        console.error("Error al conectar a MongoDB", error)
        process.exit(1)        
    }
}