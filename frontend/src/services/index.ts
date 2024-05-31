import {
  AuthServiceImpl,
  type IAuthService,
} from "@/services/auth/auth.service";
import {
  LocalStorageServiceImpl,
  type IStorageService,
} from "@/services/storage/storage.service";
import { JwtServiceImpl, type IJwtService } from "@/services/jwt/jwt.service";
import {
  authApi,
  contatosApi,
  motivosApi,
  ticketsApi,
  usersApi,
  veiculosApi,
} from "@/apis";
import {
  ITicketsService,
  TicketsServiceImpl,
} from "@/services/tickets/tickets.service";
import {
  IMotivosService,
  MotivosServiceImpl,
} from "@/services/motivos/motivos.service";
import {
  ContatosServiceImpl,
  IContatosService,
} from "@/services/contatos/contatos.service";
import {
  IVeiculosService,
  VeiculosServiceImpl,
} from "@/services/veiculos/veiculos.service";
import {
  IUsersService,
  UsersServiceImpl,
} from "@/services/users/users.service";

const authService: IAuthService = new AuthServiceImpl(authApi);

const ticketsService: ITicketsService = new TicketsServiceImpl(ticketsApi);

const contatosService: IContatosService = new ContatosServiceImpl(contatosApi);

const motivosService: IMotivosService = new MotivosServiceImpl(motivosApi);

const veiculosService: IVeiculosService = new VeiculosServiceImpl(veiculosApi);

const storageService: IStorageService = new LocalStorageServiceImpl();

const jwtService: IJwtService = new JwtServiceImpl();

const usersService: IUsersService = new UsersServiceImpl(usersApi);

export {
  storageService,
  authService,
  jwtService,
  motivosService,
  contatosService,
  ticketsService,
  veiculosService,
  usersService,
};
