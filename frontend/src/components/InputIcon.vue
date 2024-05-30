<template lang="">
  <div
    class="flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-primary ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
  >
    <Search className="h-[16px] w-[16px]" />
    <input
      type="search"
      className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    />
  </div>
</template>
<script setup lang="ts">
// Icons
import { Plus, Search } from "lucide-vue-next";
</script>
<style lang=""></style>
