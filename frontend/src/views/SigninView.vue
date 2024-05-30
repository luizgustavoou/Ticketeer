<script setup lang="ts">
// Images
import LoginIlustration from "@/assets/login-ilustration.png";

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
import { Checkbox } from "@/components/ui/checkbox";
import { RouterLink, useRouter } from "vue-router";
import { metadataRoutes } from "@/router/RoutesConfig";

// Pinia store
import { useAuthStore } from "@/stores/auth";
import { useToast } from "@/components/ui/toast";

const { toast, dismiss } = useToast();
const router = useRouter();

const { signin } = useAuthStore();

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({
        required_error: "O e-mail é obrigatório",
      })
      .email({
        message: "O e-mail informado é inválido",
      }),
    password: z
      .string({
        required_error: "A senha é obrigatória",
      })
      .min(5, {
        message: "A senha deve ter no mínimo 5 caracteres",
      }),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await signin(values.email, values.password);
    router.push({ name: metadataRoutes.HOME.name });

    form.resetForm();
  } catch (error) {
    toast({
      title: "Erro ao efetuar login.",
      description:
        error?.message ||
        "Erro desconhecido, por favor contatar os desenvolvedores.",
      variant: "default",
      duration: 1000,
    });
  }
});
</script>

<template>
  <div class="flex-1 flex">
    <div
      class="bg-[#F1F5F9] p-6 flex-1 flex flex-col justify-center items-center gap-4"
    >
      <div>
        <header class="flex flex-col gap-2">
          <h1 class="text-2xl text-primary font-bold">Entre na sua conta</h1>

          <p class="text-muted-foreground">
            Boas-vindas! Por favor, insira suas credenciais para acessar os
            sistemas da Comigo.
          </p>
        </header>

        <form class="mt-2 space-y-2" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="E-mail"
                  v-bind="componentField"
                  autocomplete="email"
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
                  autocomplete="current-password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <div class="flex items-center justify-between">
            <div class="space-x-2">
              <Checkbox id="terms" />
              <label
                for="terms"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mantenha-me conectado.
              </label>
            </div>

            <RouterLink
              class="text-primary border-b-2 border-primary"
              :to="{ name: metadataRoutes.SIGNUP.name }"
            >
              Esqueci minha senha
            </RouterLink>
          </div>

          <Button class="mt-4 w-full" type="submit">Entrar</Button>
        </form>
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center bg-primary">
      <img class="w-max-full w-[550px] h-auto" :src="LoginIlustration" />
    </div>
  </div>
</template>

<style scoped></style>
