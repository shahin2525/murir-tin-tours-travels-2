import { model, Schema } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
  },
  durationHours: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  ratingAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
  },
  ratingQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  startDates: [Date],
  startLocation: {
    type: String,
    required: [true, 'A tour must have a start location'],
  },
  locations: [String],
  slug: {
    type: String,
    required: [true, 'A tour must have a slug'],
  },
})

const Tour = model<ITour>('Tour', tourSchema)

export default Tour
