import { Router } from "express";

export class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/", (req, res) => {
      res.send("Im user router!");
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
