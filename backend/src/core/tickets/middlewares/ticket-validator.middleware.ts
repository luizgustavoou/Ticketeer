import { validateOrReject } from "class-validator";
import { Response, Request, NextFunction } from "express";
import { TicketData } from "../entities/ticket.entity";

export const createTicketValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Missing request body!" });
    }

    const ticket = new TicketData();

    ticket.tipo = req.body.tipo;
    ticket.motivo = req.body.motivo;
    ticket.descricao = req.body.descricao;
    ticket.dataAbertura = req.body.dataAbertura;
    ticket.prazo = req.body.prazo;
    ticket.status = req.body.status;

    await validateOrReject(ticket);

    next();
  } catch (e: any) {
    const message = Object.values(e[0].constraints)[0];
    res.status(400).send({ message });
  }
};
