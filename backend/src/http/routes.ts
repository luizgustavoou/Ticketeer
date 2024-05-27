import express, { NextFunction, Request, Response } from "express";
import { ticketRouter } from "../core/tickets";
import { userRouter } from "../core/users";

export const router = express();

router.use("/api/users", userRouter.getRouter());
router.use("/api/tickets", ticketRouter.getRouter());
