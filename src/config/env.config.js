import dotenv from "dotenv"

dotenv.config()

// export const PORT = process.env.PORT || 8080
// export const NODE_ENV = process.env.NODE_ENV || "development"
// export const MONGDB_URI = process.env.MONGDB_URI

export const envConfig = {
    port: Number(process.env.PORT) || 8080,
    mongoUri: process.env.MONGODB_URI ,
    nodeEnv: process.env.NODE_ENV || "development"
}