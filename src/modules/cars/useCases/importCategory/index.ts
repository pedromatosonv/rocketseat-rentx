import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"
import { ImportCategoryController } from "./ImportCategoryController"

export default(): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository()
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
  const importCategoryController = new ImportCategoryController(importCategoryUseCase)

  return importCategoryController
}
