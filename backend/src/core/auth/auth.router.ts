import { Router } from "express";
import { createUserValidator } from "./middlewares/user-validator.middleware";
import { authController } from ".";

export class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.post("/", createUserValidator, async (req, res, next) => {
      await authController.signup(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
