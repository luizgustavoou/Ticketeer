import { Expose } from "class-transformer";
import {
  IsString,
  IsInt,
  IsEmail,
  IsUrl,
  IsDate,
  IsOptional,
  MinLength,
} from "class-validator";

export class UserData {
  @Expose()
  @IsString()
  @MinLength(3)
  nome!: string;

  @Expose()
  @IsEmail()
  email!: string;

  @Expose()
  @MinLength(5)
  login!: string;

  @Expose()
  @MinLength(5)
  password!: string;
}

export class UserEntity extends UserData {
  @Expose()
  @IsInt()
  id!: number;

  @Expose()
  @IsDate()
  createdAt!: Date;

  @Expose()
  @IsDate()
  updatedAt!: Date;
}
