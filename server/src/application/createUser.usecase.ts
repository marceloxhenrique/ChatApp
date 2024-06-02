import User from "../domain/User.entity";
import { UserRepositoryInterface } from "../domain/User.repository";
import bcrypt from "bcrypt";
export class CreateUser {
  constructor(private userRepo: UserRepositoryInterface) {}

  async execute(input: CreteUserInput): Promise<CreateUserOutput | string> {
    const userExist = await this.userRepo.findByEmail(input.email);

    if (!userExist) {
      const saltRounds: number = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPassword = bcrypt.hashSync(input.password, salt);
      const user = new User(input.email, hashPassword, input?.userName);

      await this.userRepo.create(user);
      return user.getData();
    }
    return "Unable to sign up: Invalid email or password";
  }
}

type CreteUserInput = {
  userName?: string;
  email: string;
  password: string;
};

type CreateUserOutput = {
  id: string;
  email: string;
  userName?: string;
};
