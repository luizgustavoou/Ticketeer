import { Router } from "express";
import { createContatoValidator } from "./middlewares/contato-validator.middleware";
import { contatosController } from ".";

export class ContatosRouter {
  private router: Router;

  constructor() {
    this.router = Router();

    this.router.get("/:id", async (req, res, next) => {
      await contatosController.findOneById(req, res, next);
    });

    this.router.get("/", async (req, res, next) => {
      await contatosController.findMany(req, res, next);
    });

    this.router.post("/", createContatoValidator, async (req, res, next) => {
      await contatosController.create(req, res, next);
    });

    this.router.put("/:id", createContatoValidator, async (req, res, next) => {
      await contatosController.update(req, res, next);
    });

    this.router.delete("/:id", async (req, res, next) => {
      await contatosController.delete(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
