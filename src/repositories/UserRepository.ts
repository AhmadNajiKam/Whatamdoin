import type { IUser } from "./interfaces/IUser";
import { Client } from "pg";
class UserRepository {
  private client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  create = async (user: IUser): Promise<IUser> => {
    const userData = [user.id, user.username, user.email, user.password, user.state];
    const res = await this.client.query("INSERT INTO users VALUES($1,$2,$3,$4,$5) RETURNING *", userData);
    return res.rows[0];
  }
  findById = async (id: string): Promise<IUser | null> => {
    const res = await this.client.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.rows[0] ?? null;
  }
}
export default UserRepository;
