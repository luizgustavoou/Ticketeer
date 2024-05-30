import { PrismaClient } from "@prisma/client";
import { ContatoData, ContatoEntity } from "./entities/contatos.entity";

export abstract class ContatosRepository {
  abstract findMany(): Promise<ContatoEntity[]>;
  abstract findOneById(id: number): Promise<ContatoEntity>;
  abstract create(data: ContatoData): Promise<ContatoEntity>;
  abstract update(
    id: number,
    data: Partial<ContatoData>
  ): Promise<ContatoEntity>;
  abstract delete(id: number): Promise<ContatoEntity>;
}

export class ContatosRepositoryImpl implements ContatosRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(): Promise<ContatoEntity[]> {
    const output = await this.prisma.contato.findMany();

    return output;
  }
  async findOneById(id: number): Promise<ContatoEntity> {
    const output = await this.prisma.contato.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return output;
  }

  async create(data: ContatoData): Promise<ContatoEntity> {
    const output = await this.prisma.contato.create({
      data,
    });

    return output;
  }
  async update(id: number, data: Partial<ContatoData>): Promise<ContatoEntity> {
    const output = await this.prisma.contato.update({
      data,
      where: {
        id,
      },
    });

    return output;
  }

  async delete(id: number): Promise<ContatoEntity> {
    const output = await this.prisma.contato.delete({
      where: {
        id,
      },
    });

    return output;
  }
}
