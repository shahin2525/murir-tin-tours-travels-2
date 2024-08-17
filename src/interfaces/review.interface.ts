import { Schema } from 'mongoose'

interface IReview {
  review: string
  rating: number
  createdAt: string
  tour: Schema.Types.ObjectId
  user: Schema.Types.ObjectId
}

export { IReview }
