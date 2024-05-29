import { ConflictError } from "../../exceptions/conflict-error";
import { UserRepository } from "../users/user.repository";
import { AuthRepository } from "./auth.repository";
import { UserData, UserEntity } from "./entities/user.entity";

export abstract class AuthService {
  abstract signup(data: UserData): Promise<UserEntity>;
}

export class AuthServiceImpl implements AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
  ) {}

  async signup(data: UserData): Promise<UserEntity> {
    const user = await this.userRepository.findOneByEmail(data.email);

    if (user) throw new ConflictError("Usuário com este e-mail já existe");

    const output = await this.authRepository.signup(data);

    return output;
  }
}
