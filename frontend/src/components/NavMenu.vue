<script setup lang="ts">
// iCONS
import { Moon, User, RefreshCcw, Building, LogOut } from "lucide-vue-next";

import Logo from "@/assets/Brand-logo-white.png";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { metadataRoutes } from "@/router/RoutesConfig";

const router = useRouter();

const { logout } = useAuthStore();

const handleLogout = (_: MouseEvent) => {
  logout();

  router.push({ name: metadataRoutes.SIGNIN.name });
};
</script>

<template>
  <nav
    class="text-primary-foreground flex justify-between items-center bg-primary p-4"
  >
    <header>
      <img class="max-h-full" :src="Logo" alt="Logo" />
    </header>

    <section>
      <p>Atendimento ao cliente</p>
    </section>

    <ul class="flex gap-3">
      <li>
        <RefreshCcw />
      </li>
      <li>
        <Building />
      </li>
      <li>
        <Moon />
      </li>
      <li>
        <User />
      </li>
      <li>
        <a
          href="#"
          class="flex gap-2 text-lg text-white/70 hover:text-white"
          @click="handleLogout"
        >
          <LogOut />
          <span class="md:block hidden">Sair</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
