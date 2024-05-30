<script setup lang="ts">
// Vue imports
import { RouterView } from "vue-router";

// Shadcn-vue components
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <RouterView name="Navbar" />
    <RouterView />
    <!-- <Toaster /> -->
  </div>
</template>

<style scoped></style>
