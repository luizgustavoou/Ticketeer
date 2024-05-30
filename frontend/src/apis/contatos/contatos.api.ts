import { IContatoData, IContatoEntity } from "@/entities/IContato";
import { api } from "@/network/api";

export interface IContatosApi {
  create(data: IContatoData): Promise<IContatoEntity>;
  update(id: number, data: IContatoData): Promise<IContatoEntity>;
  remove(id: number): Promise<IContatoEntity>;
  findOneById(id: number): Promise<IContatoEntity>;
  findMany(): Promise<IContatoEntity[]>;
}

export class ContatosApiImpl implements IContatosApi {
  async create(data: IContatoData): Promise<IContatoEntity> {
    const res = await api.post<IContatoEntity>("/contatos", data);

    return res.data;
  }

  async update(id: number, data: IContatoData): Promise<IContatoEntity> {
    const res = await api.put<IContatoEntity>(`/contatos/${id}`, data);

    return res.data;
  }

  async remove(id: number): Promise<IContatoEntity> {
    const res = await api.delete<IContatoEntity>(`/contatos/${id}`);

    return res.data;
  }

  async findOneById(id: number): Promise<IContatoEntity> {
    const res = await api.get<IContatoEntity>(`/contatos/${id}`);

    return res.data;
  }

  async findMany(): Promise<IContatoEntity[]> {
    const res = await api.get<IContatoEntity[]>("/contatos");

    return res.data;
  }
}
