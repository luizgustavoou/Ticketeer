export const StatusTicketValues = ["PARADO", "PROGRESSO", "CONCLUIDO"] as const;

export type StatusTicket = (typeof StatusTicketValues)[number];

export const TipoTicketValues = [
  "OPERACIONAL",
  "SUPORTE",
  "RELACIONAMENTO",
  "VENDAS",
] as const;

export type TipoTicket = (typeof TipoTicketValues)[number];

export interface IMotivoData {
  descricao: string;
}

export interface IMotivoEntity extends IMotivoData {
  id: number;
}

export interface TicketData {
  tipo: TipoTicket;
  descricao: string;
  dataAbertura: Date;
  prazo: Date;
  status: StatusTicket;
  usuarioId: number;
}

export interface InputTicketData extends TicketData {
  motivoId: number;
}

export interface OutputTicketData extends TicketData {
  motivo: IMotivoEntity;
}

export interface TicketEntity extends OutputTicketData {
  id: number;
}
