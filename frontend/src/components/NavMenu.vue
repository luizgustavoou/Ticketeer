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
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Moon, User, RefreshCcw, Building } from "lucide-vue-next";

import Logo from "@/assets/Brand-logo-white.png";
import Teste from "@/assets/login-ilustration.png";
</script>

<style scoped></style>
