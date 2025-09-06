export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  state: string;
  created_at?: Date;
};
