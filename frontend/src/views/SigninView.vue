<template>
  <div class="flex-1 flex">
    <div class="p-6 flex-1 flex flex-col justify-center items-center gap-4">
      <div>
        <header class="flex flex-col gap-2">
          <h1 class="text-2xl text-primary font-bold">Entre na sua conta</h1>

          <p class="text-muted-foreground">
            Boas-vindas! Por favor, insira suas credenciais para acessar os
            sistemas da Comigo.
          </p>
        </header>

        <form class="space-y-2" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="E-mail"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Senha"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <Button class="mt-4 w-full" type="submit">Entrar</Button>
        </form>
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center bg-primary">
      <img
        class="w-max-full w-[400px] h-auto"
        src="../assets/login-ilustration.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Zod
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Shadcnvue components
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(5).email(),
    password: z.string().min(5),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<style scoped></style>

<!-- text-bg-muted : #0061A7 -->
<!-- bg: #1169B0 -->
