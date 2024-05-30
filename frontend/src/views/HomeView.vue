<script setup lang="ts">
// Icons
import { Plus, Check } from "lucide-vue-next";

// App components
import TicketForm from "@/components/TicketForm.vue";

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

// Entities
import { IInputTicketData } from "@/entities/ITicket";

// App Components
import TicketsList from "@/components/TicketsList.vue";

// Store pinia
import { useTicketsStore } from "@/stores/tickets";

const { toast, dismiss } = useToast();

const ticketsStore = useTicketsStore();

async function handleSubmit(values: IInputTicketData) {
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
          <!-- {{ form.values }} -->

          <TicketForm :handle-submit="handleSubmit">
            <template #labelSubmit> <span>Cadastrar</span> <Check /> </template>
          </TicketForm>
        </div>
      </SheetContent>
    </Sheet>

    <Suspense>
      <TicketsList />
      <template #fallback> Carregando tickets.. </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
