import { Exclude, Expose, plainToClass, Transform } from "class-transformer";
import { IsString, IsInt, IsDate, MinLength, IsIn } from "class-validator";

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
  @Expose()
  @IsIn(TipoTicketValues)
  tipo!: TipoTicket;

  @Expose()
  @IsString()
  @MinLength(5)
  motivo!: string;

  @Expose()
  @IsString()
  @MinLength(10)
  descricao!: string;

  @Expose()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  dataAbertura!: Date;

  @Expose()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  prazo!: Date;

  @Expose()
  @IsIn(StatusTicketValues)
  status!: StatusTicket;

  @Expose()
  @IsInt()
  usuarioId!: number;
}

export class TicketEntity extends TicketData {
  @Expose()
  @IsInt()
  id!: number;
}
