import { IVeiculoData, IVeiculoEntity } from "@/entities/IVeiculo";
import { api } from "@/network/api";

export interface IVeiculosApi {
  create(data: IVeiculoData): Promise<IVeiculoEntity>;
  update(id: number, data: IVeiculoData): Promise<IVeiculoEntity>;
  remove(id: number): Promise<IVeiculoEntity>;
  findOneById(id: number): Promise<IVeiculoEntity>;
  findMany(): Promise<IVeiculoEntity[]>;
}

export class VeiculosApiImpl implements IVeiculosApi {
  async create(data: IVeiculoData): Promise<IVeiculoEntity> {
    const res = await api.post<IVeiculoEntity>("/veiculos", data);

    return res.data;
  }

  async update(id: number, data: IVeiculoData): Promise<IVeiculoEntity> {
    const res = await api.put<IVeiculoEntity>(`/veiculos/${id}`, data);

    return res.data;
  }

  async remove(id: number): Promise<IVeiculoEntity> {
    const res = await api.delete<IVeiculoEntity>(`/veiculos/${id}`);

    return res.data;
  }

  async findOneById(id: number): Promise<IVeiculoEntity> {
    const res = await api.get<IVeiculoEntity>(`/veiculos/${id}`);

    return res.data;
  }

  async findMany(): Promise<IVeiculoEntity[]> {
    const res = await api.get<IVeiculoEntity[]>("/veiculos");

    return res.data;
  }
}
