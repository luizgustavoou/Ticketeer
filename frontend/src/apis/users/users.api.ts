import { IUserEntity } from "@/entities/IUser";
import { api } from "@/network/api";

export interface IUsersApi {
  findOneById(id: number): Promise<IUserEntity>;
}

export class UsersApiImpl implements IUsersApi {
  async findOneById(id: number): Promise<IUserEntity> {
    const res = await api.get<IUserEntity>(`/users/${id}`);

    return res.data;
  }
}
