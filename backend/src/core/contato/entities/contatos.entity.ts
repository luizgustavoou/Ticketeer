import {
  Expose,
} from "class-transformer";
import {
  IsString,
  IsInt,
} from "class-validator";

export class ContatoData {
  @Expose()
  @IsString()
  descricao!: string;
}

export class ContatoEntity extends ContatoData {
  @Expose()
  @IsInt()
  id!: number;
}
