import { NotFoundError } from "../../exceptions/not-found-error";
import { TicketData, TicketEntity } from "./entities/ticket.entity";
import { TicketRepository } from "./ticket.repository";

export abstract class TicketService {
  abstract findMany(): Promise<TicketEntity[]>;
  abstract findOneById(id: number): Promise<TicketEntity>;
  abstract create(data: TicketData): Promise<TicketEntity>;
  abstract update(id: number, data: Partial<TicketData>): Promise<TicketEntity>;
  abstract delete(id: number): Promise<TicketEntity>;
}

export class TicketServiceImpl implements TicketService {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async findMany(): Promise<TicketEntity[]> {
    const output = await this.ticketRepository.findMany();

    return output;
  }
  async findOneById(id: number): Promise<TicketEntity> {
    const output = await this.ticketRepository.findOneById(id);

    return output;
  }
  async create(data: TicketData): Promise<TicketEntity> {
    const output = await this.ticketRepository.create(data);

    return output;
  }
  async update(id: number, data: Partial<TicketData>): Promise<TicketEntity> {
    const output = await this.ticketRepository.update(id, data);

    return output;
  }

  async delete(id: number): Promise<TicketEntity> {
    const ticket = await this.findOneById(id);

    if (!ticket) {
      throw new NotFoundError("Ticket não encontrado");
    }

    const output = await this.ticketRepository.delete(id);

    return output;
  }
}
