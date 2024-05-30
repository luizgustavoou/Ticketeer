import { ITicketsApi } from "@/apis/tickets/tickets.api";
import { IInputTicketData, ITicketEntity } from "@/entities/ITicket";

export interface ITicketsService {
  create(data: IInputTicketData): Promise<ITicketEntity>;
  update(id: number, data: IInputTicketData): Promise<ITicketEntity>;
  remove(id: number): Promise<ITicketEntity>;
  findOneById(id: number): Promise<ITicketEntity>;
  findMany(page?: number, take?: number): Promise<ITicketEntity[]>;
}

export class TicketsServiceImpl implements ITicketsService {
  constructor(private readonly ticketsApi: ITicketsApi) {}

  async create(data: IInputTicketData): Promise<ITicketEntity> {
    const res = await this.ticketsApi.create(data);

    return res;
  }

  async update(id: number, data: IInputTicketData): Promise<ITicketEntity> {
    const res = await this.ticketsApi.update(id, data);

    return res;
  }

  async remove(id: number): Promise<ITicketEntity> {
    const res = await this.ticketsApi.remove(id);

    return res;
  }

  async findOneById(id: number): Promise<ITicketEntity> {
    const res = await this.ticketsApi.findOneById(id);

    return res;
  }

  async findMany(page: number = 1, take: number = 3): Promise<ITicketEntity[]> {
    const res = await this.ticketsApi.findMany(page, take);

    return res;
  }
}
