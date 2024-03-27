import express from "express";
import paymentsRoutes from './routes/payment.routes.js'
import { PORT } from "./routes/config.js";
import path from 'path';

const app = express()

app.use(express.json())

app.use(paymentsRoutes)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server on port', PORT);