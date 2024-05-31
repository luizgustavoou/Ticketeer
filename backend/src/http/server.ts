import "../seed/seed";
import "reflect-metadata";

// express
import express from "express";

// cors
import cors from "cors";

// routes
import { router } from "./routes";
// dotenv
import dotenv from "dotenv";
import { errorHandler } from "../commons/middlewares";

dotenv.config();

const port = process.env.API_PORT || 8080;

const app = express();

// config JSON and form data response
app.use(express.json());

// Solve CORS
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  })
);

// routes
app.use(router);

app.use(errorHandler.execute.bind(errorHandler));

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
