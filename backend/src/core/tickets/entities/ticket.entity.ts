import { Expose, Transform, Type } from "class-transformer";
import {
  IsString,
  IsInt,
  IsDate,
  MinLength,
  IsIn,
  ValidateNested,
} from "class-validator";

export const StatusTicketValues = ["PARADO", "PROGRESSO", "CONCLUIDO"] as const;

export type StatusTicket = (typeof StatusTicketValues)[number];

export const TipoTicketValues = [
  "OPERACIONAL",
  "SUPORTE",
  "RELACIONAMENTO",
  "VENDAS",
] as const;

export type TipoTicket = (typeof TipoTicketValues)[number];

export class MotivoData {
  @Expose()
  @IsString()
  descricao!: string;
}

export class MotivoEntity extends MotivoData {
  @Expose()
  @IsInt()
  id!: number;
}

export class TicketData {
  @Expose()
  @IsIn(TipoTicketValues)
  tipo!: TipoTicket;

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

export class InputTicketData extends TicketData {
  @IsInt()
  motivoId!: number;
}

export class OutputTicketData extends TicketData {
  @ValidateNested()
  @Type(() => MotivoEntity)
  motivo!: MotivoEntity;
}

export class TicketEntity extends OutputTicketData {
  @Expose()
  @IsInt()
  id!: number;
}
