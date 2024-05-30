import express, { NextFunction, Request, Response } from "express";
import { ticketRouter } from "../core/tickets";
import { userRouter } from "../core/users";
import { authRouter } from "../core/auth";
import { motivosRouter } from "../core/motivos";
import { contatosRouter } from "../core/contato";
import { veiculosRouter } from "../core/veiculos";

export const router = express();

router.use("/api/users", userRouter.getRouter());
router.use("/api/motivos", motivosRouter.getRouter());
router.use("/api/contatos", contatosRouter.getRouter());
router.use("/api/veiculos", veiculosRouter.getRouter());
router.use("/api/tickets", ticketRouter.getRouter());
router.use("/api/auth", authRouter.getRouter());
