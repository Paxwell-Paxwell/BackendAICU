import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import building from "./routers/building";
import cors from 'cors';

interface Error {
  status?: number
  message?: string
}

dotenv.config();
const app = express();
async function startServer() {
  await mongoose.connect(process.env.DATABASE_URL || '')
  const PORT = Number(process.env.PORT || 3000)
  app.use(cors());
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json());


  app.use("/building",building)

  app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })
  //next()
  app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    if (res.headersSent) {
      return next(err)
    }
    res.status(err.status ?? 500).send(`<h1>${err.message ?? 'มีข้อผิดพลาดเกิดขึ้น'}</h1>`)
  })
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  }
  )
}

startServer()

export default app;


