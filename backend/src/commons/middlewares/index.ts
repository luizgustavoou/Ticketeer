import { userService } from "../../core/users";
import { jwtService } from "../../infra/services";
import { AuthMiddleware } from "./auth-middleware";
import { ErrorHandler } from "./error-handler";

const errorHandler = new ErrorHandler();

const authMiddleware: AuthMiddleware = new AuthMiddleware(
  userService,
  jwtService
);

export { errorHandler, authMiddleware };
