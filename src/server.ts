// importing dependencies
import dotenv from "dotenv";
import express, { Request, Response, Application } from "express";
import cors from "cors";

// declaring the environment config
dotenv.config();

// global variables
const app: Application = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// test route
app.get("/", (req: Request, res: Response) => {
  res.json({ mesage: "hey! this is a typescript based server..." });
});

// routes

// exposing the server on assigned port number.
app.listen(port, () => console.log(`Listening on port ${port}`));