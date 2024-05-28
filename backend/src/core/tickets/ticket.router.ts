import { Router } from "express";
import { createTicketValidator } from "./middlewares/ticket-validator.middleware";
import { TicketData } from "./entities/ticket.entity";

export class TicketRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
      res.send("Im ticket router!");
    });

    this.router.post("/", createTicketValidator, (req, res) => {
      const ticket = new TicketData();

      ticket.tipo = req.body.tipo;
      ticket.motivo = req.body.motivo;
      ticket.descricao = req.body.descricao;
      ticket.dataAbertura = req.body.dataAbertura;
      ticket.prazo = req.body.prazo;
      ticket.status = req.body.status;

      res.status(201).send(ticket);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
