<script setup lang="ts">
// Icons
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-vue-next";

// App components
import MotivoFields from "@/components/MotivoFields.vue";
import ContatoFields from "@/components/ContatoFields.vue";
import TicketFields from "@/components/TicketFields.vue";

// Shadcn-vue components
import Button from "@/components/ui/button/Button.vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/components/ui/toast/use-toast";

// Zod
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Entities
import { TipoTicketValues } from "@/entities/ITicket";

// Vue imports
import { ref } from "vue";

// App Components
import TicketsList from "@/components/TicketsList.vue";

// Store pinia
import { useTicketsStore } from "@/stores/tickets";

const { toast, dismiss } = useToast();

const ticketsStore = useTicketsStore();

const formSchema = toTypedSchema(
  z.object({
    tipo: z.enum(TipoTicketValues, {
      required_error: "Selecione um tipo de ticket",
    }),
    motivoId: z
      .string({
        required_error: "Selecione um motivo",
      })
      .min(1, {
        message: "Selecione um motivo",
      }),
    descricao: z
      .string({
        required_error: "Descreva os detalhes",
      })
      .min(5, {
        message: "A descrição deve ter no mínimo 5 caracteres",
      }),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await ticketsStore.create({
      ...values,
      motivoId: +values.motivoId,
    });

    toast({
      title: "Cadastrar ticket",
      description: "Ticket cadastrado com sucesso!",
      variant: "default",
      duration: 1000,
    });

    form.resetForm();
    indexFormField.value = 0;
  } catch (error) {
    toast({
      title: "Erro ao cadastrar ticket",
      description:
        error?.message ||
        "Erro desconhecido, por favor contatar os desenvolvedores.",
      variant: "destructive",
      duration: 1000,
    });
  }
});

interface FormFields {
  label: string;
  component: any;
}

const navForm: FormFields[] = [
  {
    label: "CONTATO",
    component: ContatoFields,
  },
  {
    label: "TICKET",
    component: TicketFields,
  },
  {
    label: "MOTIVO",
    component: MotivoFields,
  },
];

const indexFormField = ref(0);

function next() {
  if (indexFormField.value >= navForm.length - 1) return;

  indexFormField.value += 1;
}

function back() {
  if (indexFormField.value < 0) return;

  indexFormField.value -= 1;
}
</script>

<template>
  <div class="p-6 flex-1 bg-[#F1F5F9]">
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
        <div class="flex flex-col gap-3">
          <nav class="list-none flex justify-between gap-3 pb-3 border-b-[2px]">
            <li
              v-for="(item, index) in navForm"
              class="tracking-wide text-[#6B7280] pb-3 y"
              :class="{ 'font-bold text-primary': index == indexFormField }"
            >
              {{ item.label }}
            </li>
          </nav>

          {{ form.values }}
          <form class="mt-2 space-y-2" @submit="onSubmit">
            <!-- <MotivoFields /> -->
            <div class="me-auto" v-for="(item, index) in navForm">
              <component
                v-show="index == indexFormField"
                :is="item.component"
              />
            </div>
            <div class="flex">
              <Button
                type="button"
                variant="outline"
                v-if="indexFormField > 0"
                class="flex space-x-2"
                @click="back"
              >
                <ArrowLeft />
                <span>Voltar</span>
              </Button>

              <Button
                type="button"
                v-if="indexFormField < navForm.length - 1"
                class="ms-auto flex space-x-2"
                @click="next"
              >
                <span>Avançar</span> <ArrowRight />
              </Button>
              <Button type="submit" v-else class="ms-auto flex space-x-2">
                <span>Cadastrar</span> <Check />
              </Button>
            </div>
          </form>
        </div>
        <!-- <SheetFooter>
          <SheetClose as-child>
            <Button type="submit"> Save changes </Button>
          </SheetClose>
        </SheetFooter> -->
      </SheetContent>
    </Sheet>

    <Suspense>
      <TicketsList />
      <template #fallback> Carregando tickets.. </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
