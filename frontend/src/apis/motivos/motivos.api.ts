import { api } from "@/network/api";
import { IMotivoData, IMotivoEntity } from "@/entities/ITicket";

export interface IMotivosApi {
  create(data: IMotivoData): Promise<IMotivoEntity>;
  update(id: number, data: IMotivoData): Promise<IMotivoEntity>;
  remove(id: number): Promise<IMotivoEntity>;
  findOneById(id: number): Promise<IMotivoEntity>;
  findMany(): Promise<IMotivoEntity[]>;
}

export class MotivosApiImpl implements IMotivosApi {
  async create(data: IMotivoData): Promise<IMotivoEntity> {
    const res = await api.post<IMotivoEntity>("/motivos ", data);

    return res.data;
  }

  async update(id: number, data: IMotivoData): Promise<IMotivoEntity> {
    const res = await api.put<IMotivoEntity>(`/motivos/${id}`, data);

    return res.data;
  }

  async remove(id: number): Promise<IMotivoEntity> {
    const res = await api.delete<IMotivoEntity>(`/motivos/${id}`);

    return res.data;
  }

  async findOneById(id: number): Promise<IMotivoEntity> {
    const res = await api.get<IMotivoEntity>(`/motivos/${id}`);

    return res.data;
  }

  async findMany(): Promise<IMotivoEntity[]> {
    const res = await api.get<IMotivoEntity[]>("/motivos");

    return res.data;
  }
}
