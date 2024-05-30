import { IInputTicketData } from "@/entities/ITicket";

import { ITicketEntity } from "@/entities/ITicket";
import { ticketsService } from "@/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTicketsStore = defineStore("tickets", () => {
  const tickets = ref<ITicketEntity[]>([]);

  async function getTickets() {
    const res = await ticketsService.findMany();

    tickets.value = res;
  }

  async function create(data: IInputTicketData) {
    const res = await ticketsService.create(data);

    tickets.value.push(res);
  }

  async function update(ticketId: number, data: IInputTicketData) {
    const res = await ticketsService.update(ticketId, data);

    tickets.value = tickets.value.map((project) => {
      if (project.id != res.id) return project;

      return res;
    });
  }

  async function deleteProject(ticketId: number) {
    const res = await ticketsService.remove(ticketId);

    tickets.value = tickets.value.filter((ticket) => ticket.id != res.id);
  }

  return { tickets, getTickets, create, update, deleteProject };
});
