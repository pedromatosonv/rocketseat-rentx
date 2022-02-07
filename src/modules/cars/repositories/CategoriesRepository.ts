import { Category } from "../models/Category"
import { ICreateCategoryDTO, ICategoriesRepository } from './ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category|undefined {
    const category = this.categories.find(category => category.name == name)
    return category
  }
}

export { CategoriesRepository }