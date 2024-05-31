import { IUsersApi } from "@/apis/users/users.api";
import { IUserEntity } from "@/entities/IUser";

export interface IUsersService {
  findOneById(id: number): Promise<IUserEntity>;
}

export class UsersServiceImpl implements IUsersService {
  constructor(private readonly usersApi: IUsersApi) {}

  async findOneById(id: number): Promise<IUserEntity> {
    const res = await this.usersApi.findOneById(id);

    return res;
  }
}
