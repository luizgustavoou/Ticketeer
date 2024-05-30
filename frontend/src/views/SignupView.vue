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
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { authService } from "@/services";

const { toast, dismiss } = useToast();
const router = useRouter();

const { signin } = useAuthStore();

const formSchema = toTypedSchema(
  z
    .object({
      email: z
        .string({
          required_error: "O e-mail é obrigatório",
        })
        .email({
          message: "O e-mail informado é inválido",
        }),
      nome: z
        .string({
          required_error: "O nome é obrigatório",
        })
        .min(3, {
          message: "O nome deve ter no mínimo 3 caracteres",
        }),
      password: z
        .string({
          required_error: "Campo senha obrigatório",
        })
        .min(5, { message: "Senha deve ter no mínimo 5 caracteres." }),
      confirmPassword: z.string({
        required_error: "Campo confirmar senha obrigatório",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Senhas não correspondem",
      path: ["confirmPassword"],
    })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    const { confirmPassword, ...data } = values;
    await authService.signup(data);

    form.resetForm();

    toast({
      title: "Conta cadastrada com sucesso.",
      description: "Entre no sistema e aproveite as funcionalidades 💙",
    });
  } catch (error) {
    toast({
      title: "Erro ao efetuar login.",
      description:
        error?.message ||
        "Erro desconhecido, por favor contatar os desenvolvedores.",
      variant: "destructive",
      duration: 1000,
    });
  }
});
</script>

<template>
  <div class="flex-1 flex flex-row-reverse">
    <div
      class="relative bg-[#F1F5F9] p-6 flex-1 flex flex-col justify-center items-center gap-4"
    >
      <RouterLink
        class="flex space-x-3 font-bold absolute top-5 left-5"
        :to="{ name: metadataRoutes.SIGNIN.name }"
      >
        <ArrowLeft class="text-primary" />
        <span class="text-primary"> Autenticar </span>
      </RouterLink>
      <div>
        <header class="flex flex-col gap-2">
          <h1 class="text-2xl text-primary font-bold">
            Registre-se na Comigo!
          </h1>

          <p class="text-muted-foreground">
            Registre-se e aproveite as funcionalidades que o sistema tem a
            oferecer!
            <span class="text-2xl">💙</span>
          </p>
        </header>

        <form class="mt-2 space-y-2" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="nome">
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nome"
                  v-bind="componentField"
                  autocomplete="nome"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

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
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirmar senha"
                  v-bind="componentField"
                  autocomplete="current-password"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          </FormField>

          <Button class="mt-4 w-full" type="submit">Registrar-se</Button>
        </form>
      </div>
    </div>

    <div class="flex-1 flex justify-center items-center bg-primary">
      <img class="w-max-full w-[550px] h-auto" :src="LoginIlustration" />
    </div>
  </div>
</template>

<style scoped></style>
