import { UserData, UserEntity } from "./entities/user.entity";
import { UserRepository } from "./user.repository";

export abstract class UserService {
  abstract findMany(): Promise<UserEntity[]>;
  abstract findOneById(id: number): Promise<UserEntity>;
  abstract create(data: UserData): Promise<UserEntity>;
  abstract update(id: number, data: Partial<UserData>): Promise<UserEntity>;
}

export class UserServiceImpl implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findMany(): Promise<UserEntity[]> {
    const output = await this.userRepository.findMany();

    return output;
  }
  async findOneById(id: number): Promise<UserEntity> {
    const output = await this.userRepository.findOneById(id);

    return output;
  }
  async create(data: UserData): Promise<UserEntity> {
    const output = await this.userRepository.create(data);

    return output;
  }
  async update(id: number, data: Partial<UserData>): Promise<UserEntity> {
    const output = await this.userRepository.update(id, data);

    return output;
  }
}
