import { Router } from "express";

export class TicketRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
      res.send("Im ticket router!");
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
