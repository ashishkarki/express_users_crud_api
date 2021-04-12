import express from 'express'

import { DEFAULT_SERVER_PORT, NODE_ENV_OPTIONS } from './constants.js'
import routes from './routes/users.js'

// this is our backend server
const app = express()

// initialize middlewares
app.use(express.json())

// specify routes
app.use('/users', routes)

app.get('/', (req, res) => res.send('Welcome to CRUD API Example 1'))

// start server
const PORT = process.env.PORT || DEFAULT_SERVER_PORT
const NODE_ENV = process.env.NODE_ENV || NODE_ENV_OPTIONS.DEV

app.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
)
