import express from 'express'
import cors from 'cors'
import { UserRouter } from './routes/user.route'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users/', UserRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to murir tin',
  })
})

export default app
