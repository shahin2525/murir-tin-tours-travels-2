import express from 'express'
import cors from 'cors'
import { UserRouter } from './routes/user.route'
import { TourRouter } from './routes/tour.route'
import { ReviewRouter } from './routes/review.route'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users/', UserRouter)
app.use('/api/v1/tours/', TourRouter)
app.use('/api/v1/reviews', ReviewRouter)

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to murir tin',
  })
})

export default app
