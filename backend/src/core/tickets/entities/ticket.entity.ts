import { IsString, IsInt, IsDate, MinLength, IsIn, IsDateString } from "class-validator";

export const StatusTicketValues = ["PARADO", "PROGRESSO", "CONCLUIDO"] as const;

export type StatusTicket = (typeof StatusTicketValues)[number];

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

  @IsDateString()
  dataAbertura!: string;

  @IsDateString()
  prazo!: string;

  @IsIn(StatusTicketValues)
  status!: StatusTicket;
}

export class TicketEntity extends TicketData {
  @IsInt()
  id!: number;
}
