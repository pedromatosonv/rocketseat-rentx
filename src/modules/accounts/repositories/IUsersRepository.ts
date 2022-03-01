import { User } from "../entities/User"

interface ICreateUserDTO {
  name: string
  password: string
  email: string
  driverLicense: string
  isAdmin: boolean
}

interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<User|undefined>
  findById(id: string): Promise<User|undefined>
  list(): Promise<User[]>
}

export { IUsersRepository, ICreateUserDTO }