import {
  Expose,
  plainToClass,
  plainToInstance,
  Transform,
  Type,
} from "class-transformer";
import {
  IsString,
  IsInt,
  IsDate,
  MinLength,
  IsIn,
  ValidateNested,
} from "class-validator";
import { VeiculosEntity } from "../../veiculos/entities/veiculos.entity";

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
  @MinLength(5)
  descricao!: string;

  @Expose()
  @Transform(({ value }) => (value ? new Date(value) : new Date()))
  @IsDate()
  dataAbertura!: Date;

  @Expose()
  @Transform(({ value }) => (value ? new Date(value) : new Date()))
  @IsDate()
  prazo!: Date;

  @Expose()
  @Transform(({ value }) => value || StatusTicketValues[0])
  @IsIn(StatusTicketValues)
  status!: StatusTicket;
}

export class InputTicketData extends TicketData {
  @Expose()
  @IsInt()
  motivoId!: number;

  @Expose()
  @IsInt()
  veiculoId!: number;

  @Expose()
  @IsInt()
  usuarioId!: number;
}

export class OutputTicketData extends TicketData {
  @ValidateNested()
  @Type(() => MotivoEntity)
  motivo!: MotivoEntity;

  @ValidateNested()
  @Type(() => MotivoEntity)
  veiculo!: VeiculosEntity;
}

export class TicketEntity extends OutputTicketData {
  @Expose()
  @IsInt()
  id!: number;
}
