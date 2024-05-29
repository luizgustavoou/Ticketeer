export const RoleValues = ["ADMIN", "ATENDENTE"] as const;

export type Roles = (typeof RoleValues)[number];

export interface IUserData {
  nome: string;
  email: string;
  login: string;
  password: string;
  role: Roles;
}

export interface IUserEntity extends IUserData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
