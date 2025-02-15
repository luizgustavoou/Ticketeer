import { serializeUserJwt } from "@/helpers/serializeUserJwt";

import { authService, jwtService, storageService } from "@/services";
import type { JwtDecoded } from "@/services/jwt/jwt.service";
import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export interface UserState {
  id: number | undefined;
  email: string | undefined;
}

function loadUser(): UserState | null {
  const accessToken = storageService.getItem("accessToken");

  const userJwt: JwtDecoded | null = accessToken
    ? jwtService.decode(accessToken)
    : null;

  const userLoaded: UserState | null = userJwt
    ? serializeUserJwt(userJwt)
    : null;

  return userLoaded;
}

const userLoaded: UserState | null = loadUser();

export const useAuthStore = defineStore("auth", () => {
  const user: UserState = reactive({
    id: userLoaded?.id,
    email: userLoaded?.email,
  });

  const isAuthenticated = computed(() => {
    return !!user.id;
  });

  async function signin(login: string, password: string): Promise<UserState> {
    try {
      const res = await authService.signin(login, password);

      console.log({ res });
      const decoded: JwtDecoded = jwtService.decode(res.accessToken);

      storageService.setItem("accessToken", res.accessToken);

      const newUserState = { id: decoded.sub, email: decoded.email };
      Object.assign(user, newUserState);

      return newUserState;
    } catch (error) {
      throw error;
    }
  }

  async function logout() {
    storageService.removeItem("accessToken");
    user.email = undefined;
    user.id = undefined;
  }

  return {
    user,
    signin,
    logout,
    isAuthenticated,
  };
});
