import { Router } from "express";
import { createUserValidator } from "./middlewares/user-validator.middleware";
import { authController } from ".";
import { signinAuthValidator } from "./middlewares/signin-validator.middleware";

export class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.post("/signup", createUserValidator, async (req, res, next) => {
      await authController.signup(req, res, next);
    });

    this.router.post("/signin", signinAuthValidator, async (req, res, next) => {
      await authController.signin(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
