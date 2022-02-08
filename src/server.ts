import express from 'express'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import { router } from './routes';

const app = express();

app.use(express.json())

const swaggerFile = YAML.load('./src/swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3333, () => console.log('Server listening on port 3333'))