// importing dependencies
import dotenv from "dotenv";
import express, { Request, Response, Application, json, urlencoded } from "express";
import cors from "cors";

// importing custom middlwares
import databaseConnection from './middlewares/database';
import morganMiddleware from "./middlewares/morgan";

// importing utilities
import Logger from './utils/logger';

// declaring the environment config
dotenv.config();

// global variables
const app: Application = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ extended: true, limit: "50mb" }));
app.use(morganMiddleware);

// test route
app.get("/", (req: Request, res: Response) => {
  res.json({ mesage: "hey! this is a typescript based server..." });
});

// routes

// exposing the server on assigned port number.
app.listen(port, () => {
  Logger.info(`Listening on port ${port}`);
  databaseConnection();
});