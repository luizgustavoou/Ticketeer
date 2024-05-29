import { UserRouter } from "./user.router";
import { UserRepository, UserRepositoryImpl } from "./user.repository";
import { PrismaClient } from "@prisma/client";
import { UserControllerImpl } from "./user.controller";
import { UserService, UserServiceImpl } from "./user.service";

const prisma = new PrismaClient();

const userRouter = new UserRouter();

const userRepository: UserRepository = new UserRepositoryImpl(prisma);

const userService: UserService = new UserServiceImpl(userRepository);

const userController = new UserControllerImpl(userService);

export { userRouter, userRepository, userController };
