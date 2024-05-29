import express, { NextFunction, Request, Response } from "express";
import { ticketRouter } from "../core/tickets";
import { userRouter } from "../core/users";
import { authRouter } from "../core/auth";

export const router = express();

router.use("/api/users", userRouter.getRouter());
router.use("/api/tickets", ticketRouter.getRouter());
router.use("/api/auth", authRouter.getRouter());
