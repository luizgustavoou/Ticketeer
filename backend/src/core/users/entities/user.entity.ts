import { Expose, Transform } from "class-transformer";
import {
  IsString,
  IsInt,
  IsEmail,
  IsDate,
  MinLength,
  IsIn,
} from "class-validator";

export const RoleValues = ["ADMIN", "ATENDENTE"] as const;

export type Roles = (typeof RoleValues)[number];

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
  password!: string;

  @Expose()
  @Transform(({ value }) => value || RoleValues[1])
  @IsIn(RoleValues)
  role!: Roles;
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
