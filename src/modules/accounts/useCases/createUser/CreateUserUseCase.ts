import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO, IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const { name, password, email, driverLicense, isAdmin } = data

    const userAlreadyExists = await this.usersRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError('A user with given email already exists')
    }

    const passwordHash = await hash(password, 8)

    await this.usersRepository.createUser({
      name,
      password: passwordHash,
      email,
      driverLicense,
      isAdmin
    })
  }
}

export { CreateUserUseCase }