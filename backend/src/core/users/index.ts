import { UserRouter } from "./user.router";
import { UserRepository, UserRepositoryImpl } from "./user.repository";
import { PrismaClient } from "@prisma/client";
import { UserControllerImpl } from "./user.controller";

const prisma = new PrismaClient();

const userRouter = new UserRouter();

const userRepository: UserRepository = new UserRepositoryImpl(prisma);

const userController = new UserControllerImpl(userRepository);

export { userRouter, userController };
