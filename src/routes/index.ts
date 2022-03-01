import { Router } from "express";
import { authenticateRoutes } from "./authenticateRoutes";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationsRoutes } from "./specificationsRoutes";
import { usersRoutes } from "./usersRoutes";

const router = Router()

router.use('/categories', categoriesRoutes)
router.use('/specifications', specificationsRoutes)
router.use('/users', usersRoutes)
router.use(authenticateRoutes)

export { router }