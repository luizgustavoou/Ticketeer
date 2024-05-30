import { AuthApiImpl, IAuthApi } from "@/apis/auth/auth.api";
import { ITicketsApi, TicketsApiImpl } from "@/apis/tickets/tickets.api";
import { IMotivosApi, MotivosApiImpl } from "@/apis/motivos/motivos.api";

const authApi: IAuthApi = new AuthApiImpl();

const ticketsApi: ITicketsApi = new TicketsApiImpl();

const motivosApi: IMotivosApi = new MotivosApiImpl();

export { authApi, ticketsApi, motivosApi };
