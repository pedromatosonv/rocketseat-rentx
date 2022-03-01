import express, { Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import './database'
import './shared/container'
import { router } from './routes';
import { AppError } from './errors/AppError'

const app = express();

app.use(express.json())

const swaggerFile = YAML.load('./src/swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({ message: `Internal server error: ${err.message}` })
})

app.listen(3333, () => console.log('Server listening on port 3333'))