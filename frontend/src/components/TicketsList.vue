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

// Pinia
import { useTicketsStore } from "@/stores/tickets";
import { storeToRefs } from "pinia";

// Icons
import { Pencil, Trash2 } from "lucide-vue-next";

const ticketsStore = useTicketsStore();

const { tickets } = storeToRefs(ticketsStore);
await ticketsStore.getTickets();
</script>

<template>
  <Table>
    <TableCaption>Exibindo 3 de 3 do total de 3 registros</TableCaption>
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
      <TableRow v-for="ticket in tickets" :key="ticket.id">
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

  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="2"
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
</template>

<style scoped></style>
