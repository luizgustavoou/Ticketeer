import { AuthApiImpl, IAuthApi } from "@/apis/auth/auth.api";
import { ITicketsApi, TicketsApiImpl } from "./tickets/tickets.api";

const authApi: IAuthApi = new AuthApiImpl();

const ticketsApi: ITicketsApi = new TicketsApiImpl();

export { authApi, ticketsApi };
