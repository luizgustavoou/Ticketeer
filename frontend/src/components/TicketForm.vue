<script setup lang="ts">
// Icons
import { ArrowLeft, ArrowRight } from "lucide-vue-next";

// App components
import MotivoFields from "@/components/MotivoFields.vue";
import ContatoFields from "@/components/ContatoFields.vue";
import TicketFields from "@/components/TicketFields.vue";

// Shadcn-vue components
import Button from "@/components/ui/button/Button.vue";

// Zod
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

// Entities
import {
  IInputTicketData,
  ITicketEntity,
  TipoTicketValues,
} from "@/entities/ITicket";

// Vue imports
import { ref } from "vue";

export interface ITicketFormProps {
  ticket?: ITicketEntity;
  clearFormAfterSubmit?: boolean;
  handleSubmit: (values: IInputTicketData) => Promise<void>;
}

const props = withDefaults(defineProps<ITicketFormProps>(), {
  clearFormAfterSubmit: true,
});

const formSchema = toTypedSchema(
  z.object({
    contatoId: z
      .string({
        required_error: "Selecione um contato",
      })
      .transform((e) => (e === "" ? null : e))
      .nullable(),
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
    veiculoId: z
      .string({
        required_error: "Selecione um veículo",
      })
      .min(1, {
        message: "Selecione um veículo",
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

form.setValues({
  descricao: props.ticket?.descricao,
  motivoId: props.ticket?.motivo.id.toString(),
  tipo: props.ticket?.tipo,
  veiculoId: props.ticket?.veiculo.id.toString(),
  contatoId: props.ticket?.contato ? props.ticket.contato.id.toString() : null,
});

const onSubmit = form.handleSubmit(async (values) => {
  await props.handleSubmit({
    ...values,
    motivoId: +values.motivoId,
    veiculoId: +values.veiculoId,
    contatoId: values.contatoId ? +values.contatoId : null,
  });

  if (props.clearFormAfterSubmit) {
    console.log("oi");
    form.resetForm();
    indexFormField.value = 0;
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
  <!-- {{ form.values }}
  <br />
  {{ form.errors }} -->
  <form class="mt-2 space-y-2" @submit="onSubmit">
    <nav class="list-none flex justify-between gap-3 pb-3 border-b-[2px]">
      <li
        v-for="(item, index) in navForm"
        class="tracking-wide text-[#6B7280] pb-3 y"
        :class="{ 'font-bold text-primary': index == indexFormField }"
      >
        {{ item.label }}
      </li>
    </nav>

    <div class="me-auto" v-for="(item, index) in navForm">
      <component v-show="index == indexFormField" :is="item.component" />
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
        <slot name="labelSubmit"></slot>
      </Button>
    </div>
  </form>
</template>

<style scoped></style>
