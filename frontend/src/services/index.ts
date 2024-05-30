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
} from "./contatos/contatos.service";
import {
  IVeiculosService,
  VeiculosServiceImpl,
} from "./veiculos/veiculos.service";

const authService: IAuthService = new AuthServiceImpl(authApi);

const ticketsService: ITicketsService = new TicketsServiceImpl(ticketsApi);

const contatosService: IContatosService = new ContatosServiceImpl(contatosApi);

const motivosService: IMotivosService = new MotivosServiceImpl(motivosApi);

const veiculosService: IVeiculosService = new VeiculosServiceImpl(veiculosApi);

const storageService: IStorageService = new LocalStorageServiceImpl();

const jwtService: IJwtService = new JwtServiceImpl();

export {
  storageService,
  authService,
  jwtService,
  motivosService,
  contatosService,
  ticketsService,
  veiculosService,
};
