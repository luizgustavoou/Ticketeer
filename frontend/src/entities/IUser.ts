export const RoleValues = ["ADMIN", "ATENDENTE"] as const;

export type Roles = (typeof RoleValues)[number];

export interface IUserData {
  nome: string;
  email: string;
  password: string;
}

export interface IIOutputUserData {
  role: Roles;
}

export interface IUserEntity extends IIOutputUserData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
