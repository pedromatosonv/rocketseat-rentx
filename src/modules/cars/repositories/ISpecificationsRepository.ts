import { Specification } from "../models/Specification"

interface ICreateSpecificationDTO {
  name: string
  description: string
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO)
  findByName(name: string): Specification|undefined
  list(): Specification[]
}

export { ICreateSpecificationDTO, ISpecificationsRepository }