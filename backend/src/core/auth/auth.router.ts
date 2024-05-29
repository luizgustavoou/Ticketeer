import { Router } from "express";

import { authController } from ".";
import { signinAuthValidator } from "./middlewares/signin-validator.middleware";
import { createUserValidator } from "../users/middlewares/user-validator.middleware";

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
