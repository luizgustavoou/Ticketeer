import { Router } from "express";
import { createUserValidator } from "./middlewares/user-validator.middleware";
import { userController } from ".";

export class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res, next) => {
      await userController.findOneById(req, res, next);
    });

    this.router.get("/", async (req, res, next) => {
      await userController.findMany(req, res, next);
    });

    this.router.post("/", createUserValidator, async (req, res, next) => {
      await userController.create(req, res, next);
    });

    this.router.put("/:id", createUserValidator, async (req, res, next) => {
      await userController.update(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
