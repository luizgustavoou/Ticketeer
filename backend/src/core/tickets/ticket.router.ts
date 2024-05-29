import { Router } from "express";
import { createTicketValidator } from "./middlewares/ticket-validator.middleware";
import { ticketController } from ".";
import { authMiddleware } from "../../commons/middlewares";

export class TicketRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get(
      "/:id",
      authMiddleware.execute.bind(authMiddleware),
      async (req, res, next) => {
        await ticketController.findOneById(req, res, next);
      }
    );

    this.router.get(
      "/",
      authMiddleware.execute.bind(authMiddleware),
      async (req, res, next) => {
        await ticketController.findMany(req, res, next);
      }
    );

    this.router.post(
      "/",
      createTicketValidator,
      authMiddleware.execute.bind(authMiddleware),
      async (req, res, next) => {
        await ticketController.create(req, res, next);
      }
    );

    this.router.put(
      "/:id",
      createTicketValidator,
      authMiddleware.execute.bind(authMiddleware),
      async (req, res, next) => {
        await ticketController.update(req, res, next);
      }
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
