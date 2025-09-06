import { Client } from "pg";
import type { IUser } from "../repositories/interfaces/IUser";
import UserRepository from "../repositories/UserRepository";


class UserService {
  private userRepository;
  constructor() {
    const dbClient = new Client({
      user: "whatamdoin",
      password: "whatamdoin",
      host: "localhost",
      port: 5432,
      database: "whatamdoin",
    });
    dbClient.connect();
    this.userRepository = new UserRepository(dbClient);
  }
  createUser = async (user: IUser): Promise<IUser | null> => {
    return this.userRepository.create(user);
  }
  getUserState = async (id: string): Promise<{ username: string; state: string; } | null> => {
    const user = await this.userRepository.findById(id);
    return (user ? { username: user.username, state: user.state } : null);
  }
}
export default UserService;
