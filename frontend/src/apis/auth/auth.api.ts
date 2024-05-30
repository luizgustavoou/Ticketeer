import { IUserData, IUserEntity } from "@/entities/IUser";
import { api } from "@/network/api";
import { IAuthResponse } from "@/apis/auth/models/IAuthResponse";

export interface IAuthApi {
  signin(email: string, password: string): Promise<IAuthResponse>;
  signup(data: IUserData): Promise<IUserEntity>;
}

export class AuthApiImpl implements IAuthApi {
  async signin(email: string, password: string): Promise<IAuthResponse> {
    const res = await api.post<IAuthResponse>("/auth/signin", {
      email,
      password,
    });

    const data = res.data;

    return data;
  }

  async signup(input: IUserData): Promise<IUserEntity> {
    const res = await api.post<IUserEntity>("/auth/signup", input);

    const data = res.data;

    return data;
  }
}
