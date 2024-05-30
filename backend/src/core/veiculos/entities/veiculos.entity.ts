import { Expose } from "class-transformer";
import { IsString, IsInt } from "class-validator";

export class VeiculosData {
  @Expose()
  @IsString()
  identificador!: string;
}

export class VeiculosEntity extends VeiculosData {
  @Expose()
  @IsInt()
  id!: number;
}
