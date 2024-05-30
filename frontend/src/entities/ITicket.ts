import { IVeiculoEntity } from "@/entities/IVeiculo";

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
}

export interface IInputTicketData extends ITicketData {
  motivoId: number;
  veiculoId: number;
}

export interface IOutputTicketData extends ITicketData {
  motivo: IMotivoEntity;
  veiculo: IVeiculoEntity;
  dataAbertura: Date;
  prazo: Date;
  status: StatusTicket;
  usuarioId: number;
}

export interface ITicketEntity extends IOutputTicketData {
  id: number;
}
