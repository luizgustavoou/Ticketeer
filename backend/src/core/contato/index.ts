import { PrismaClient } from "@prisma/client";
import { ContatosService, ContatosServiceImpl } from "./contatos.service";
import {
  ContatosRepository,
  ContatosRepositoryImpl,
} from "./contatos.repository";
import { ContatosRouter } from "./contatos.router";
import { ContatosControllerImpl } from "./contatos.controller";

const prisma = new PrismaClient();

const contatosRouter = new ContatosRouter();

const contatosRepository: ContatosRepository = new ContatosRepositoryImpl(
  prisma
);

const contatosService: ContatosService = new ContatosServiceImpl(
  contatosRepository
);

const contatosController = new ContatosControllerImpl(contatosService);

export {
  contatosRouter,
  contatosRepository,
  contatosController,
  contatosService,
};
