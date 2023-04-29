import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./config";
import { cronRunner } from "./cron";
import { authRouter, carRouter, userRouter } from "./router";
import { IError } from "./types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/cars", carRouter);
app.use("/auth", authRouter);

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 400;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

const connectionDb = async () => {
  let dbCon = false;
  while (!dbCon) {
    try {
      await mongoose.connect(configs.DB_URL);
      cronRunner();
      dbCon = true
    } catch (e) {
      console.log('DB has unavailable, wait 1 minute');
      await new Promise(resolve => setTimeout(resolve, 60000))
    }
  }
}

const start = async () => {
  try {
    await connectionDb()
    await app.listen(configs.PORT, () => configs.HOST);
    console.log(`Server has started on port: ${configs.PORT}`);
  } catch (e) {
    console.log(e);
  }
}

start()
