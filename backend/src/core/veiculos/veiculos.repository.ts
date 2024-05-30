import { PrismaClient } from "@prisma/client";
import { VeiculosData, VeiculosEntity } from "./entities/veiculos.entity";

export abstract class VeiculosRepository {
  abstract findMany(): Promise<VeiculosEntity[]>;
  abstract findOneById(id: number): Promise<VeiculosEntity>;
  abstract create(data: VeiculosData): Promise<VeiculosEntity>;
  abstract update(
    id: number,
    data: Partial<VeiculosData>
  ): Promise<VeiculosEntity>;
  abstract delete(id: number): Promise<VeiculosEntity>;
}

export class VeiculosRepositoryImpl implements VeiculosRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(): Promise<VeiculosEntity[]> {
    const output = await this.prisma.veiculo.findMany();

    return output;
  }
  async findOneById(id: number): Promise<VeiculosEntity> {
    const output = await this.prisma.veiculo.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return output;
  }

  async create(data: VeiculosData): Promise<VeiculosEntity> {
    const output = await this.prisma.veiculo.create({
      data,
    });

    return output;
  }
  async update(
    id: number,
    data: Partial<VeiculosData>
  ): Promise<VeiculosEntity> {
    const output = await this.prisma.veiculo.update({
      data,
      where: {
        id,
      },
    });

    return output;
  }

  async delete(id: number): Promise<VeiculosEntity> {
    const output = await this.prisma.veiculo.delete({
      where: {
        id,
      },
    });

    return output;
  }
}
