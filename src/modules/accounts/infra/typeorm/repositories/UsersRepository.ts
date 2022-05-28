import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async createUser(data: ICreateUserDTO): Promise<void> {
    const { name, password, email, driverLicense, isAdmin } = data

    const user = await this.repository.create({ name, password, email, driverLicense, isAdmin })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User|undefined> {
    const user = await this.repository.findOne({ email })

    return user
  }

  async findById(id: string): Promise<User|undefined> {
    const user = await this.repository.findOne(id)
    return user
  }

  async list(): Promise<User[]> {
    const all = await this.repository.find()

    return all
  }
}

export { UsersRepository }