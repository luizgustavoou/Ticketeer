import { Router } from "express";
import { createTicketValidator } from "./middlewares/ticket-validator.middleware";
import { ticketController } from ".";

export class TicketRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res) => {
      await ticketController.findOneById(req, res);
    });

    this.router.get("/", async (req, res) => {
      await ticketController.findMany(req, res);
    });

    this.router.post("/", createTicketValidator, async (req, res) => {
      await ticketController.create(req, res);
    });

    this.router.put("/:id", createTicketValidator, async (req, res) => {
      await ticketController.update(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
