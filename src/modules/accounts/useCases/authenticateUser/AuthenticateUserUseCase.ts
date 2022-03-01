import { inject, injectable } from 'tsyringe'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { IUsersRepository } from '../../repositories/IUsersRepository'
import { AppError } from '../../../../errors/AppError'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string
    email: string
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Checar se usuário existe
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Invalid email or password");
    }

    // Checar se senha é válida
    const passwordMatches = await compare(password, user.password)

    if (!passwordMatches) {
      throw new AppError("Invalid email or password");
    }

    // Retornar
    const token = sign({}, 'fc5e038d38a57032085441e7fe7010b0', {
      subject: user.id,
      expiresIn: '1d'
    })
    const authReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return authReturn
  }
}

export { AuthenticateUserUseCase }