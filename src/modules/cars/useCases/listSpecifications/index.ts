import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";
import { ListSpecificationsController } from "./ListSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationController = new ListSpecificationsController(listSpecificationUseCase)

export { listSpecificationController }