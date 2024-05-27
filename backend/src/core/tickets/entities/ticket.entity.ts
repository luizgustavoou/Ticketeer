import { IsString, IsInt, IsDate, MinLength, IsIn } from "class-validator";

export const StateTicketValues = ["PARADO", "PROGRESSO", "CONCLUIDO"] as const;

export type StateTicket = (typeof StateTicketValues)[number];

export const TipoTicketValues = [
  "OPERACIONAL",
  "SUPORTE",
  "RELACIONAMENTO",
  "VENDAS",
] as const;

export type TipoTicket = (typeof TipoTicketValues)[number];

export class TicketData {
  @IsIn(TipoTicketValues)
  tipo!: TipoTicket;

  @IsString()
  @MinLength(5)
  motivo!: string;

  @IsString()
  @MinLength(10)
  descricao!: string;

  @IsDate()
  dataAbertura!: string;

  @IsDate()
  prazo!: string;

  @IsIn(StateTicketValues)
  state!: StateTicket;

  constructor(partial: Partial<TicketData>) {
    Object.assign(this, partial);
  }
}

export class TicketEntity extends TicketData {
  @IsInt()
  id!: number;
}
