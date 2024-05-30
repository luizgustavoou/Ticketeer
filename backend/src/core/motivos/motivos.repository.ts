import { PrismaClient } from "@prisma/client";
import { MotivoData, MotivoEntity } from "../tickets/entities/ticket.entity";

export abstract class MotivosRepository {
  abstract findMany(): Promise<MotivoEntity[]>;
  abstract findOneById(id: number): Promise<MotivoEntity>;
  abstract create(data: MotivoData): Promise<MotivoEntity>;
  abstract update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity>;
  abstract delete(id: number): Promise<MotivoEntity>;
}

export class MotivosRepositoryImpl implements MotivosRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(): Promise<MotivoEntity[]> {
    const output = await this.prisma.motivo.findMany();

    return output;
  }
  async findOneById(id: number): Promise<MotivoEntity> {
    const output = await this.prisma.motivo.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return output;
  }

  async create(data: MotivoData): Promise<MotivoEntity> {
    const output = await this.prisma.motivo.create({
      data,
    });

    return output;
  }
  async update(id: number, data: Partial<MotivoData>): Promise<MotivoEntity> {
    const output = await this.prisma.motivo.update({
      data,
      where: {
        id,
      },
    });

    return output;
  }

  async delete(id: number): Promise<MotivoEntity> {
    const output = await this.prisma.motivo.delete({
      where: {
        id,
      },
    });

    return output;
  }
}
