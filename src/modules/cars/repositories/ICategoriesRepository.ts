import { Category } from "../models/Category"

interface ICreateCategoryDTO {
  name: string
  description: string
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void
  findByName(name: string): Category|undefined
  list(): Category[]
}

export { ICreateCategoryDTO, ICategoriesRepository }