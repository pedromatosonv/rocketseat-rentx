import { Router } from "express";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationsRoutes } from "./specificationsRoutes";

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)

export { router }