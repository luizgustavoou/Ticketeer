import { api } from "@/network/api";
import { IInputTicketData, ITicketEntity } from "@/entities/ITicket";

export interface ITicketsApi {
  create(data: IInputTicketData): Promise<ITicketEntity>;
  update(id: number, data: IInputTicketData): Promise<ITicketEntity>;
  remove(id: number): Promise<ITicketEntity>;
  findOneById(id: number): Promise<ITicketEntity>;
  findMany(page: number, take: number): Promise<ITicketEntity[]>;
}

export class TicketsApiImpl implements ITicketsApi {
  async create(data: IInputTicketData): Promise<ITicketEntity> {
    const res = await api.post<ITicketEntity>("/tickets ", data);

    return res.data;
  }

  async update(id: number, data: IInputTicketData): Promise<ITicketEntity> {
    const res = await api.put<ITicketEntity>(`/tickets/${id}`, data);

    return res.data;
  }

  async remove(id: number): Promise<ITicketEntity> {
    const res = await api.delete<ITicketEntity>(`/tickets/${id}`);

    return res.data;
  }

  async findOneById(id: number): Promise<ITicketEntity> {
    const res = await api.get<ITicketEntity>(`/tickets/${id}`);

    return res.data;
  }

  async findMany(page: number = 1, take: number = 3): Promise<ITicketEntity[]> {
    const res = await api.get<ITicketEntity[]>("/tickets", {
      params: {
        page,
        take,
      },
    });

    return res.data;
  }
}
