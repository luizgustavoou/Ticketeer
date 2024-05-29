import { JwtService, JwtServiceImpl } from "./jwt.service";

import dotenv from "dotenv";
import { BcryptServiceImpl, CryptService } from "./crypt.service";

dotenv.config();

const jwtSecret: string = process.env.JWT_SECRET as string;

const jwtService: JwtService = new JwtServiceImpl(jwtSecret);

const cryptService: CryptService = new BcryptServiceImpl();

export { jwtService, cryptService };
