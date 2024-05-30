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

export interface ITicketData {
  tipo: TipoTicket;
  descricao: string;
  dataAbertura: Date;
  prazo: Date;
  status: StatusTicket;
  usuarioId: number;
}

export interface IInputTicketData extends ITicketData {
  motivoId: number;
}

export interface IOutputTicketData extends ITicketData {
  motivo: IMotivoEntity;
}

export interface ITicketEntity extends IOutputTicketData {
  id: number;
}
