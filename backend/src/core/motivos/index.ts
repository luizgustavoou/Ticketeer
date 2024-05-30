import { MotivosRouter } from "./motivos.router";
import { MotivosRepository, MotivosRepositoryImpl } from "./motivos.repository";
import { PrismaClient } from "@prisma/client";
import { MotivosService, MotivosServiceImpl } from "./motivos.service";
import { MotivosControllerImpl } from "./motivos.controller";

const prisma = new PrismaClient();

const motivosRouter = new MotivosRouter();

const motivosRepository: MotivosRepository = new MotivosRepositoryImpl(prisma);

const motivosService: MotivosService = new MotivosServiceImpl(
  motivosRepository
);

const motivosController = new MotivosControllerImpl(motivosService);

export { motivosRouter, motivosRepository, motivosController, motivosService };
