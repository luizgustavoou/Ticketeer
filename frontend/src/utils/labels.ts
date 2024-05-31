import { StatusTicket, TipoTicket } from "@/entities/ITicket";

export const tipoTicketLabel: Record<TipoTicket, string> = {
  OPERACIONAL: "Operacional",
  SUPORTE: "Suporte",
  RELACIONAMENTO: "Relacionamento",
  VENDAS: "Vendas",
};

export const statusTicketLabel: Record<StatusTicket, string> = {
  PARADO: "À fazer",
  PROGRESSO: "Em andamento",
  CONCLUIDO: "Concluído",
};
