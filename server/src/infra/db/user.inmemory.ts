import User from "../../domain/user/User.entity";
import { UserRepositoryInterface } from "../../domain/user/User.repository";

export default class UserInMemory implements UserRepositoryInterface {
  users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
    console.log("User in memory", this.users);
  }
  async findById(userId: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.getData().id === userId);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.getData().email === email);
    return user;
  }
}
