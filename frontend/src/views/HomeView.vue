<script setup lang="ts">
// Icons
import { ArrowRight, Check, Plus, Search } from "lucide-vue-next";

// App components
import MotivoFields from "@/components/MotivoFields.vue";
import ContatoFields from "@/components/ContatoFields.vue";
import TicketFields from "@/components/TicketFields.vue";

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
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Zod
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Entities
import { TipoTicketValues } from "@/entities/ITicket";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import FormLabel from "@/components/ui/form/FormLabel.vue";
import FormDescription from "@/components/ui/form/FormDescription.vue";
import { computed, ref } from "vue";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TicketsList from "@/components/TicketsList.vue";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const formSchema = toTypedSchema(
  z.object({
    tipo: z.enum(TipoTicketValues),
    motivoId: z.string().min(1),
    descricao: z.string().min(5),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log({ values });
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
                <span>Voltar</span> <ArrowRight />
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
