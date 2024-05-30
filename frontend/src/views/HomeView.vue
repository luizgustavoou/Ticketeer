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
        <div class="flex flex-col gap-3">
          <nav class="list-none flex gap-3">
            <li
              class="tracking-wide text-[#6B7280] pb-3 border-b-[2px] border-primary"
            >
              CONTATO
            </li>
            <li
              class="tracking-wide text-[#6B7280] pb-3 border-b-[2px] border-primary"
            >
              TICKET
            </li>
            <li
              class="tracking-wide text-[#6B7280] pb-3 border-b-[2px] border-primary"
            >
              MOTIVO
            </li>
          </nav>
          <div>
            <p>Houve contato passivo?</p>
            <RadioGroup default-value="comfortable">
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r1" value="default" />
                <Label for="r1">Default</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="r2" value="comfortable" />
                <Label for="r2">Comfortable</Label>
              </div>
            </RadioGroup>
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Zod
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Entities
import { TipoTicketValues } from "@/entities/ITicket";

const formSchema = toTypedSchema(
  z.object({
    tipo: z.enum(TipoTicketValues),
    motivoId: z.string().min(1),
    descricao: z.string().min(5),
    dataAbertura: z.date(),
    prazo: z.date(),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log({ values });
});
</script>

<style scoped></style>
