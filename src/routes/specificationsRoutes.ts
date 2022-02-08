import { Router } from "express"
import { createSpecificationController } from "../modules/cars/useCases/createSpecification"
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications"

const specificationsRoutes = Router()

specificationsRoutes.post('/', (req, res) => {
  createSpecificationController.handle(req, res)
})

specificationsRoutes.get('/', (req, res) => {
  listSpecificationController.handle(req, res)
})

export { specificationsRoutes }