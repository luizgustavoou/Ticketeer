import { VeiculosData, VeiculosEntity } from "./entities/veiculos.entity";
import { VeiculosRepository } from "./veiculos.repository";

export abstract class VeiculosService {
  abstract findMany(): Promise<VeiculosEntity[]>;
  abstract findOneById(id: number): Promise<VeiculosEntity>;
  abstract create(data: VeiculosData): Promise<VeiculosEntity>;
  abstract update(
    id: number,
    data: Partial<VeiculosData>
  ): Promise<VeiculosEntity>;
  abstract delete(id: number): Promise<VeiculosEntity>;
}

export class VeiculosServiceImpl implements VeiculosService {
  constructor(private readonly veiculosRepository: VeiculosRepository) {}

  async findMany(): Promise<VeiculosEntity[]> {
    const output = await this.veiculosRepository.findMany();

    return output;
  }
  async findOneById(id: number): Promise<VeiculosEntity> {
    const output = await this.veiculosRepository.findOneById(id);

    return output;
  }
  async create(data: VeiculosData): Promise<VeiculosEntity> {
    const output = await this.veiculosRepository.create(data);

    return output;
  }
  async update(
    id: number,
    data: Partial<VeiculosData>
  ): Promise<VeiculosEntity> {
    const output = await this.veiculosRepository.update(id, data);

    return output;
  }

  async delete(id: number): Promise<VeiculosEntity> {
    const output = await this.veiculosRepository.delete(id);

    return output;
  }
}
