import { Router } from "express";
import { createContatoValidator } from "./middlewares/veiculos-validator.middleware";
import { veiculosController } from ".";

export class VeiculosRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res, next) => {
      await veiculosController.findOneById(req, res, next);
    });

    this.router.get("/", async (req, res, next) => {
      await veiculosController.findMany(req, res, next);
    });

    this.router.post("/", createContatoValidator, async (req, res, next) => {
      await veiculosController.create(req, res, next);
    });

    this.router.put("/:id", createContatoValidator, async (req, res, next) => {
      await veiculosController.update(req, res, next);
    });

    this.router.delete("/:id", async (req, res, next) => {
      await veiculosController.delete(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
