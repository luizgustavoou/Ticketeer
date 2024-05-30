<script setup lang="ts">
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

// Pinia
import { useTicketsStore } from "@/stores/tickets";
import { storeToRefs } from "pinia";

// Icons
import { Pencil, Trash2 } from "lucide-vue-next";
import { computed, ref, watchEffect } from "vue";
import { useDebounceFn } from "@vueuse/core";

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
          {{ "Veículo" }}
        </TableCell>
        <TableCell>
          {{ ticket.dataAbertura }}
        </TableCell>
        <TableCell>
          {{ ticket.prazo }}
        </TableCell>
        <TableCell>
          <Button variant="ghost">
            <Pencil />
          </Button>
          <Button
            variant="ghost"
            class="text-destructive hover:text-destructive"
          >
            <Trash2 />
          </Button>
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

    <Select v-model="itemsPerPage">
      <SelectTrigger class="w-[70px]">
        <SelectValue placeholder="Selecione a quantidade" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tickets por página</SelectLabel>
          <SelectItem
            v-for="value in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            :value="value"
          >
            {{ value }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped></style>
