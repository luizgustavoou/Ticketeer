import { IAuthResponse } from "@/apis/auth/models/IAuthResponse";
import { IUserData, IUserEntity } from "@/entities/IUser";
import { IAuthApi } from "@/apis/auth/auth.api";

export interface IAuthService {
  signin(login: string, password: string): Promise<IAuthResponse>;
  signup(data: IUserData): Promise<IUserEntity>;
}

export class AuthServiceImpl implements IAuthService {
  constructor(private readonly authApi: IAuthApi) {}

  async signin(login: string, password: string): Promise<IAuthResponse> {
    try {
      const res = await this.authApi.signin(login, password);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async signup(input: IUserData): Promise<IUserEntity> {
    try {
      const res = await this.authApi.signup(input);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
