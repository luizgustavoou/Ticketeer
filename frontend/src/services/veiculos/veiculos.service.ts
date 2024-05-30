import { IVeiculosApi } from "@/apis/veiculos/veiculos.api";
import { IVeiculoData, IVeiculoEntity } from "@/entities/IVeiculo";

export interface IVeiculosService {
  create(data: IVeiculoData): Promise<IVeiculoEntity>;
  update(id: number, data: IVeiculoData): Promise<IVeiculoEntity>;
  remove(id: number): Promise<IVeiculoEntity>;
  findOneById(id: number): Promise<IVeiculoEntity>;
  findMany(): Promise<IVeiculoEntity[]>;
}

export class VeiculosServiceImpl implements IVeiculosService {
  constructor(private readonly veiculosApi: IVeiculosApi) {}

  async create(data: IVeiculoData): Promise<IVeiculoEntity> {
    const res = await this.veiculosApi.create(data);

    return res;
  }

  async update(id: number, data: IVeiculoData): Promise<IVeiculoEntity> {
    const res = await this.veiculosApi.update(id, data);

    return res;
  }

  async remove(id: number): Promise<IVeiculoEntity> {
    const res = await this.veiculosApi.remove(id);

    return res;
  }

  async findOneById(id: number): Promise<IVeiculoEntity> {
    const res = await this.veiculosApi.findOneById(id);

    return res;
  }

  async findMany(): Promise<IVeiculoEntity[]> {
    const res = await this.veiculosApi.findMany();

    return res;
  }
}
