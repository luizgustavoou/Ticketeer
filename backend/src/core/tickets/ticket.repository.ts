import { PrismaClient } from "@prisma/client";
import { TicketData, TicketEntity } from "./entities/ticket.entity";

export abstract class TicketRepository {
  abstract findMany(): Promise<TicketEntity[]>;
  abstract findOneById(id: number): Promise<TicketEntity>;
  abstract create(data: TicketData): Promise<TicketEntity>;
  abstract update(id: number, data: Partial<TicketData>): Promise<TicketEntity>;
}

export class TicketRepositoryImpl implements TicketRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(): Promise<TicketEntity[]> {
    const output = await this.prisma.ticket.findMany();

    return output;
  }
  async findOneById(id: number): Promise<TicketEntity> {
    const output = await this.prisma.ticket.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return output;
  }
  async create(data: TicketData): Promise<TicketEntity> {
    const output = await this.prisma.ticket.create({
      data,
    });

    return output;
  }
  async update(id: number, data: Partial<TicketData>): Promise<TicketEntity> {
    const output = await this.prisma.ticket.update({
      data,
      where: {
        id,
      },
    });

    return output;
  }
}
