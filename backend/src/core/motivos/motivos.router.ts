import { Router } from "express";
import { createMotivoValidator } from "./middlewares/motivo-validator.middleware";
import { motivosController } from ".";

export class MotivosRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res, next) => {
      await motivosController.findOneById(req, res, next);
    });

    this.router.get("/", async (req, res, next) => {
      await motivosController.findMany(req, res, next);
    });

    this.router.post("/", createMotivoValidator, async (req, res, next) => {
      await motivosController.create(req, res, next);
    });

    this.router.put("/:id", createMotivoValidator, async (req, res, next) => {
      await motivosController.update(req, res, next);
    });

    this.router.delete(
      "/:id",
      async (req, res, next) => {
        await motivosController.delete(req, res, next);
      }
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
