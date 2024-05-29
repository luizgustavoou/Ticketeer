import { PrismaClient } from "@prisma/client";
import { TicketRepositoryImpl } from "./ticket.repository";
import { TicketRouter } from "./ticket.router";
import { TicketControllerImpl } from "./ticket.controller";

const prisma = new PrismaClient();

const ticketRouter = new TicketRouter();

const ticketRepository = new TicketRepositoryImpl(prisma);

const ticketController = new TicketControllerImpl(ticketRepository);

export { ticketRouter, ticketController };
