import {
  AuthServiceImpl,
  type IAuthService,
} from "@/services/auth/auth.service";
import {
  LocalStorageServiceImpl,
  type IStorageService,
} from "@/services/storage/storage.service";
import { JwtServiceImpl, type IJwtService } from "@/services/jwt/jwt.service";
import { authApi, motivosApi, ticketsApi } from "@/apis";
import {
  ITicketsService,
  TicketsServiceImpl,
} from "@/services/tickets/tickets.service";
import {
  IMotivosService,
  MotivosServiceImpl,
} from "@/services/motivos/motivos.service";

const authService: IAuthService = new AuthServiceImpl(authApi);

const ticketsService: ITicketsService = new TicketsServiceImpl(ticketsApi);

const motivosService: IMotivosService = new MotivosServiceImpl(motivosApi);

const storageService: IStorageService = new LocalStorageServiceImpl();

const jwtService: IJwtService = new JwtServiceImpl();

export {
  storageService,
  authService,
  jwtService,
  ticketsService,
  motivosService,
};
