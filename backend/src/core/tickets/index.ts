import { PrismaClient } from "@prisma/client";
import { TicketRepositoryImpl } from "./ticket.repository";
import { TicketRouter } from "./ticket.router";

const prisma = new PrismaClient();

const ticketRouter = new TicketRouter();

const ticketRepository = new TicketRepositoryImpl(prisma);

export { ticketRouter };
