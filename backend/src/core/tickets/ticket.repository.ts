import { PrismaClient } from "@prisma/client";
import { InputTicketData, TicketEntity } from "./entities/ticket.entity";

export abstract class TicketRepository {
  abstract findMany(skip: number, take: number): Promise<TicketEntity[]>;
  abstract findOneById(id: number): Promise<TicketEntity>;
  abstract create(data: InputTicketData): Promise<TicketEntity>;
  abstract update(
    id: number,
    data: Partial<InputTicketData>
  ): Promise<TicketEntity>;
  abstract delete(id: number): Promise<TicketEntity>;
}

export class TicketRepositoryImpl implements TicketRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(skip: number, take: number): Promise<TicketEntity[]> {
    const output = await this.prisma.ticket.findMany({
      include: {
        motivo: true,
      },
      skip,
      take,
    });

    return output;
  }
  async findOneById(id: number): Promise<TicketEntity> {
    const output = await this.prisma.ticket.findUnique({
      where: {
        id,
      },
      include: {
        motivo: true,
      },
    });

    return output as any;
  }
  async create(data: InputTicketData): Promise<TicketEntity> {
    const output = await this.prisma.ticket.create({
      data,
      include: {
        motivo: true,
      },
    });

    return output;
  }
  async update(
    id: number,
    data: Partial<InputTicketData>
  ): Promise<TicketEntity> {
    const output = await this.prisma.ticket.update({
      data,
      where: {
        id,
      },
      include: {
        motivo: true,
      },
    });

    return output;
  }

  async delete(id: number): Promise<TicketEntity> {
    const output = await this.prisma.ticket.delete({
      where: {
        id,
      },
      include: {
        motivo: true,
      },
    });

    return output;
  }
}
