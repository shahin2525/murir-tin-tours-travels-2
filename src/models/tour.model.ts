import { model, Schema } from 'mongoose'
import { ITour, ITourMethods, TourModel } from '../interfaces/tour.interface'
import slugify from 'slugify'

const tourSchema = new Schema<ITour, TourModel, ITourMethods>(
  {
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
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

tourSchema.virtual('durationDays').get(function () {
  return this.durationHours / 24
})

// pre hook for adding slug

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    lower: true,
  })
  next()
})

// tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
//   nearestStartDate: Date | null
//   estimatedEndDate: Date | null
// } {
//   const today = new Date()
//   const futureDates = this.startDates.filter((startDate: Date) => {
//     return startDate > today
//   })
//   futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
//   const nearestStartDate = futureDates[0]
//   const estimatedEndDate = new Date(
//     nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
//   )
//   return {
//     nearestStartDate,
//     estimatedEndDate,
//   }
// }

tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
} {
  const today = new Date()
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today
  })
  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())
  const nearestStartDate = futureDates[0]
  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000,
  )
  return {
    nearestStartDate,
    estimatedEndDate,
  }
}

const Tour = model<ITour, TourModel>('Tour', tourSchema)

export default Tour
