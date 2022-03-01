import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, driverLicense, isAdmin } = req.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({ name, email, password, driverLicense, isAdmin })

    return res.status(201).send()
  }
}

export { CreateUserController }