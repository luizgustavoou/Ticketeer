import { PrismaClient } from "@prisma/client";
import { VeiculosRouter } from "./veiculos.router";
import {
  VeiculosRepository,
  VeiculosRepositoryImpl,
} from "./veiculos.repository";
import { VeiculosService, VeiculosServiceImpl } from "./veiculos.service";
import { VeiculosControllerImpl } from "./veiculos.controller";

const prisma = new PrismaClient();

const veiculosRouter = new VeiculosRouter();

const veiculosRepository: VeiculosRepository = new VeiculosRepositoryImpl(
  prisma
);

const veiculosService: VeiculosService = new VeiculosServiceImpl(
  veiculosRepository
);

const veiculosController = new VeiculosControllerImpl(veiculosService);

export {
  veiculosRouter,
  veiculosRepository,
  veiculosController,
  veiculosService,
};
