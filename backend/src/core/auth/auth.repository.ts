import { PrismaClient } from "@prisma/client";
import { UserData, UserEntity } from "./entities/user.entity";

export abstract class AuthRepository {
  abstract signup(data: UserData): Promise<UserEntity>;
}

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async signup(data: UserData): Promise<UserEntity> {
    const output = await this.prisma.usuario.create({
      data,
    });

    return output;
  }
}
