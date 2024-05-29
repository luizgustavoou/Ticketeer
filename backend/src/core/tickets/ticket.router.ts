import { Router } from "express";
import { createTicketValidator } from "./middlewares/ticket-validator.middleware";
import { TicketData } from "./entities/ticket.entity";
import { ticketController } from ".";

export class TicketRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
      res.send("Im ticket router!");
    });

    this.router.post("/", createTicketValidator, async (req, res) => {
      await ticketController.create(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
