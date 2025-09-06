import type { IUser } from "./IUser";

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  updateUser(id: string, user: Partial<IUser>): Promise<boolean>;
  deleteUser(id: string): Promise<boolean>;
}
