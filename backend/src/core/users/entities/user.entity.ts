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
  name!: string;

  @IsEmail()
  email!: string;

  @IsUrl()
  @IsOptional()
  avatarUrl?: string | null;

  constructor(partial: Partial<UserData>) {
    Object.assign(this, partial);
  }
}

export class UserEntity extends UserData {
  @IsInt()
  id!: number;

  @IsDate()
  createdAt!: string;

  @IsDate()
  updatedAt!: string;
}
