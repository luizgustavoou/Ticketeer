import { AuthApiImpl, IAuthApi } from "@/apis/auth/auth.api";

const authApi: IAuthApi = new AuthApiImpl();

export { authApi };
