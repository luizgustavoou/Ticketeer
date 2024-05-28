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
  @IsString()
  @MinLength(3)
  nome!: string;

  @IsEmail()
  email!: string;
}

export class UserEntity extends UserData {
  @IsInt()
  id!: number;

  @IsDate()
  createdAt!: Date;

  @IsDate()
  updatedAt!: Date;
}
