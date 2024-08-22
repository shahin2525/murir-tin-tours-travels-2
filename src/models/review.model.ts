import { model, Schema } from 'mongoose'
import { IReview, IReviewModel } from '../interfaces/review.interface'

const reviewSchema = new Schema<IReview>(
  {
    review: {
      type: String,
      required: [true, 'A review must have text'],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'A review must have a rating'],
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

reviewSchema.index({ user: 1, tour: 1 }, { unique: true })

const Review = model<IReview, IReviewModel>('Review', reviewSchema)

export default Review
