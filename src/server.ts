import express from 'express'

import { categoriesRoutes } from './routes/categoriesRoutes'

const app = express();

app.use(express.json())
app.use('/categories', categoriesRoutes)

app.listen(3333, () => console.log('Server listening on port 3333'))