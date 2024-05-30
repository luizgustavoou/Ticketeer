<script setup lang="ts">
// App components
import TicketForm from "@/components/TicketForm.vue";

// Shadcn-vue components
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "./ui/button/Button.vue";
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/toast/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Pinia
import { useTicketsStore } from "@/stores/tickets";
import { storeToRefs } from "pinia";

// Icons
import { Pencil, Trash2, Check } from "lucide-vue-next";

// Vue imports
import { computed, ref, watchEffect } from "vue";

// Vueuse
import { useDebounceFn } from "@vueuse/core";

const { toast, dismiss } = useToast();
const ticketsStore = useTicketsStore();

const { tickets } = storeToRefs(ticketsStore);
await ticketsStore.getTickets();

const itemsPerPage = ref(3);
const page = ref(1);
const skip = computed(() => {
  return (page.value - 1) * itemsPerPage.value;
});
const ticketsTable = computed(() => {
  return tickets.value.slice(skip.value, skip.value + itemsPerPage.value);
});

// const getTickets = useDebounceFn(async (page: number = 1, take: number = 3) => {
//   await ticketsStore.getTickets(page, take);
// }, 200);

// watchEffect(async () => {
//   await getTickets();
// });

async function handleUpdate(idTicket: number, values: IInputTicketData) {
  try {
    await ticketsStore.update(idTicket, {
      ...values,
      motivoId: +values.motivoId,
    });

    toast({
      title: "Atualizar ticket",
      description: "Ticket atualizado com sucesso!",
      variant: "default",
      duration: 1000,
    });
  } catch (error) {
    toast({
      title: "Erro ao atualizar ticket",
      description:
        error?.message ||
        "Erro desconhecido, por favor contatar os desenvolvedores.",
      variant: "destructive",
      duration: 1000,
    });
  }
}

const deleteTicket = async (id: number) => {
  try {
    await ticketsStore.remove(id);

    toast({
      title: "Remover ticket",
      description: "Ticket removido com sucesso!",
      variant: "default",
      duration: 1000,
    });
  } catch (error) {
    toast({
      title: "Erro ao remover ticket",
      description:
        error?.message ||
        "Erro desconhecido, por favor contatar os desenvolvedores.",
      variant: "destructive",
      duration: 1000,
    });
  }
};
const handleStringToInt = (value: string) => {
  page.value = 1;
  itemsPerPage.value = parseInt(value);
};
</script>

<template>
  <Table>
    <!-- <TableCaption>Exibindo 3 de 3 do total de 3 registros</TableCaption> -->
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> ID </TableHead>
        <TableHead>Tipo</TableHead>
        <TableHead>Motivo</TableHead>
        <TableHead>Descrição</TableHead>
        <TableHead>Cliente</TableHead>
        <TableHead>Veículo</TableHead>
        <TableHead>Data de abertura</TableHead>
        <TableHead>Prazo</TableHead>
        <TableHead> Ações </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        class="bg-white hover:bg-white"
        v-for="ticket in ticketsTable"
        :key="ticket.id"
      >
        <TableCell class="font-medium">
          {{ ticket.id }}
        </TableCell>
        <TableCell>{{ ticket.tipo }}</TableCell>
        <TableCell>{{ ticket.motivo.descricao }}</TableCell>
        <TableCell>
          {{ ticket.descricao }}
        </TableCell>
        <TableCell>
          {{ "Cliente" }}
        </TableCell>
        <TableCell>
          {{ ticket.veiculo.identificador }}
        </TableCell>
        <TableCell>
          {{ ticket.dataAbertura }}
        </TableCell>
        <TableCell>
          {{ ticket.prazo }}
        </TableCell>
        <TableCell>
          <Sheet>
            <SheetTrigger as-child>
              <Button variant="ghost">
                <Pencil />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription> Formulário de cadastro </SheetDescription>
                <SheetTitle>Novo atendimento ao cliente</SheetTitle>
              </SheetHeader>
              <div class="flex flex-col gap-3">
                <!-- {{ form.values }} -->

                <TicketForm
                  :clear-form-after-submit="false"
                  :ticket="ticket"
                  :handle-submit="(values) => handleUpdate(ticket.id, values)"
                >
                  <template #labelSubmit>
                    <span>Atualizar</span> <Check />
                  </template>
                </TicketForm>
              </div>
            </SheetContent>
          </Sheet>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant="ghost"
                class="text-destructive hover:text-destructive"
              >
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle
                  >Você tem certeza que deseja remover o
                  ticket?</AlertDialogTitle
                >
                <AlertDialogDescription>
                  Essa ação não pode ser desfeita. Isso excluirá permanentemente
                  o ticket dos nossos servidores.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction @click="() => deleteTicket(ticket.id)"
                  >Continuar</AlertDialogAction
                >
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>

  <div class="mt-6 flex items-center justify-between">
    <Pagination
      v-slot="{ page }"
      v-model:page="page"
      :total="tickets.length"
      :items-per-page="itemsPerPage"
      :sibling-count="1"
      show-edges
      :default-page="1"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>

    <div>
      Exibindo {{ ticketsTable.length }} de {{ itemsPerPage }} do total de
      {{ tickets.length }} registros
    </div>

    <Select @update:model-value="(value) => handleStringToInt(value)">
      <SelectTrigger class="w-[70px]">
        <SelectValue placeholder="Selecione a quantidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tickets por página</SelectLabel>
          <SelectItem
            v-for="value in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :value="value.toString()"
          >
            {{ value }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
