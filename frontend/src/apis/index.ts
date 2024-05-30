import { AuthApiImpl, IAuthApi } from "@/apis/auth/auth.api";
import { ITicketsApi, TicketsApiImpl } from "@/apis/tickets/tickets.api";
import { IMotivosApi, MotivosApiImpl } from "@/apis/motivos/motivos.api";
import { ContatosApiImpl, IContatosApi } from "@/apis/contatos/contatos.api";
import { IVeiculosApi, VeiculosApiImpl } from "@/apis/veiculos/veiculos.api";

const authApi: IAuthApi = new AuthApiImpl();

const ticketsApi: ITicketsApi = new TicketsApiImpl();

const motivosApi: IMotivosApi = new MotivosApiImpl();

const contatosApi: IContatosApi = new ContatosApiImpl();

const veiculosApi: IVeiculosApi = new VeiculosApiImpl();

export { authApi, ticketsApi, motivosApi, contatosApi, veiculosApi };
