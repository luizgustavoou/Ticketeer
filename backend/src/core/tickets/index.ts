import { PrismaClient } from "@prisma/client";
import { TicketRepositoryImpl } from "./ticket.repository";
import { TicketRouter } from "./ticket.router";
import { TicketControllerImpl } from "./ticket.controller";
import { TicketService, TicketServiceImpl } from "./ticket.service";

const prisma = new PrismaClient();

const ticketRouter = new TicketRouter();

const ticketRepository = new TicketRepositoryImpl(prisma);

const ticketService: TicketService = new TicketServiceImpl(ticketRepository);

const ticketController = new TicketControllerImpl(ticketService);

export { ticketRouter, ticketController };
