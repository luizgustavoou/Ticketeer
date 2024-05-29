import { PrismaClient } from "@prisma/client";
import { UserData, UserEntity } from "./entities/user.entity";

export abstract class UserRepository {
  abstract findMany(): Promise<UserEntity[]>;
  abstract findOneById(id: number): Promise<UserEntity>;
  abstract findOneByEmail(email: string): Promise<UserEntity>;
  abstract create(data: UserData): Promise<UserEntity>;
  abstract update(id: number, data: Partial<UserData>): Promise<UserEntity>;
}

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany(): Promise<UserEntity[]> {
    const output = await this.prisma.usuario.findMany();

    return output;
  }
  async findOneById(id: number): Promise<UserEntity> {
    const output = await this.prisma.usuario.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return output;
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const output = await this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    return output as any;
  }

  async create(data: UserData): Promise<UserEntity> {
    const output = await this.prisma.usuario.create({
      data,
    });

    return output;
  }
  async update(id: number, data: Partial<UserData>): Promise<UserEntity> {
    const output = await this.prisma.usuario.update({
      data,
      where: {
        id,
      },
    });

    return output;
  }
}
