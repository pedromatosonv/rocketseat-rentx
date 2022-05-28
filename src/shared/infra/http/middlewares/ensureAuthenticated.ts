import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersRepository';

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing')
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, 'fc5e038d38a57032085441e7fe7010b0') as IPayload

    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)

    if (!user) {
      throw new AppError("Users does not exists", 401)
    }

    next()
  } catch {
    throw new AppError("Invalid token", 401)
  }
}