import {
  AuthServiceImpl,
  type IAuthService,
} from "@/services/auth/auth.service";
import {
  LocalStorageServiceImpl,
  type IStorageService,
} from "@/services/storage/storage.service";
import { JwtServiceImpl, type IJwtService } from "@/services/jwt/jwt.service";
import { authApi, ticketsApi } from "@/apis";
import { ITicketsService, TicketsServiceImpl } from "./tickets/tickets.service";

const authService: IAuthService = new AuthServiceImpl(authApi);

const ticketsService: ITicketsService = new TicketsServiceImpl(ticketsApi);

const storageService: IStorageService = new LocalStorageServiceImpl();

const jwtService: IJwtService = new JwtServiceImpl();

export { storageService, authService, jwtService, ticketsService };
