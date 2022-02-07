import { Router } from "express"
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService"
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository"

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(specificationsRepository)

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})

specificationsRoutes.get('/', (req, res) => {
  const all = specificationsRepository.list()

  return res.json(all)
})

export { specificationsRoutes }