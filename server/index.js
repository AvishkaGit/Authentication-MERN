import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()
import { UserRouter } from './routes/User.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter)


mongoose.connect('mongodb://127.0.0.1:27017/Authentication');

app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})