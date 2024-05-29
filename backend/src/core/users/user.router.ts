import { Router } from "express";
import { createUserValidator } from "./middlewares/user-validator.middleware";
import { userController } from ".";

export class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res) => {
      await userController.findOneById(req, res);
    });

    this.router.get("/", async (req, res) => {
      await userController.findMany(req, res);
    });

    this.router.post("/", createUserValidator, async (req, res) => {
      await userController.create(req, res);
    });

    this.router.put("/", createUserValidator, async (req, res) => {
      await userController.update(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
