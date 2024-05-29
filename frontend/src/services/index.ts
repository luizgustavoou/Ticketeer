import {
  AuthServiceImpl,
  type IAuthService,
} from "@/services/auth/auth.service";
import {
  LocalStorageServiceImpl,
  type IStorageService,
} from "@/services/storage/storage.service";
import { JwtServiceImpl, type IJwtService } from "@/services/jwt/jwt.service";
import { authApi } from "@/apis";

const authService: IAuthService = new AuthServiceImpl(authApi);

const storageService: IStorageService = new LocalStorageServiceImpl();

const jwtService: IJwtService = new JwtServiceImpl();

export { storageService, authService, jwtService };
