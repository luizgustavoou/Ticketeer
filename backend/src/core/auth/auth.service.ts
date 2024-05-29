import { ConflictError } from "../../exceptions/conflict-error";
import { UserRepository } from "../users/user.repository";
import { AuthRepository } from "./auth.repository";
import { UserData, UserEntity } from "../users/entities/user.entity";
import { JwtService } from "../../infra/services/jwt.service";
import { CryptService } from "../../infra/services/crypt.service";
import { NotFoundError } from "../../exceptions/not-found-error";
import { UnauthorizedError } from "../../exceptions/unathorized-error";

export abstract class AuthService {
  abstract signup(data: UserData): Promise<UserEntity>;
  abstract signin(login: string, password: string): Promise<ResponseSignIn>;
}

export interface ResponseSignIn {
  id: number;
  accessToken: string;
}

export class AuthServiceImpl implements AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly cryptService: CryptService
  ) {}

  async signin(login: string, password: string): Promise<ResponseSignIn> {
    const user = await this.userRepository.findOneByLogin(login);

    if (!user) {
      throw new NotFoundError("Usuário não encontrado.");
    }

    const compare = await this.cryptService.compare(password, user.password);

    if (!compare) {
      throw new UnauthorizedError("Senha incorreta.");
    }

    const { token } = this.getTokens(user.id);

    return {
      id: user.id,
      accessToken: token,
    };
  }

  async signup(data: UserData): Promise<UserEntity> {
    const user = await this.userRepository.findOneByEmail(data.email);

    if (user) throw new ConflictError("Usuário com este e-mail já existe");

    const hashPassword = await this.cryptService.generateHash(data.password);

    const output = await this.authRepository.signup({
      ...data,
      password: hashPassword,
    });

    return output;
  }

  private getTokens(payload: any) {
    const token = this.jwtService.generateToken(payload);

    return {
      token,
    };
  }
}
