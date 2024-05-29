import { hash, genSalt, compare } from "bcrypt";

export abstract class CryptService {
  abstract generateHash(content: string): Promise<string>;

  abstract compare(content: string, hash: string): Promise<boolean>;
}

export class BcryptServiceImpl implements CryptService {
  async generateHash(content: string) {
    const salt = await genSalt();
    const passwordHash = await hash(content, salt);

    return passwordHash;
  }

  async compare(content: string, hash: string): Promise<boolean> {
    const result = await await compare(content, hash);

    return result;
  }
}
