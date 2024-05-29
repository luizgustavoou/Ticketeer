import { PrismaClient } from "@prisma/client";
import { AuthControllerImpl } from "./auth.controller";
import { AuthRepository, AuthRepositoryImpl } from "./auth.repository";
import { AuthRouter } from "./auth.router";
import { AuthService, AuthServiceImpl } from "./auth.service";
import { userRepository } from "../users";
import { cryptService, jwtService } from "../../infra/services";

const prisma = new PrismaClient();

const authRouter = new AuthRouter();

const authRepository: AuthRepository = new AuthRepositoryImpl(prisma);

const authService: AuthService = new AuthServiceImpl(
  authRepository,
  userRepository,
  jwtService,
  cryptService
);

const authController = new AuthControllerImpl(authService);

export { authRouter, authController };
