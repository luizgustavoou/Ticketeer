<template>
  <div class="p-3 flex-1 bg-[#F1F5F9]">
    <Sheet>
      <SheetTrigger as-child>
        <Button class="space-x-2" variant="default">
          <span> Abrir ticket </span>
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription> Formulário de cadastro </SheetDescription>
          <SheetTitle>Novo atendimento ao cliente</SheetTitle>
        </SheetHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right"> Name </Label>
            <Input id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Username </Label>
            <Input id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit"> Save changes </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>

<script setup lang="ts">
// Icons
import { Plus } from "lucide-vue-next";
// Shadcn-vue
import Button from "@/components/ui/button/Button.vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
</script>

<style scoped></style>
