import { Model } from 'mongoose'

interface ITour {
  name: string
  durationHours: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]
  createdAt: Date
  startDates: Date[]
  startLocation: string
  locations: string[]
  slug: string
}

interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null
    estimatedEndDate: Date | null
  }
}

// Create a new Model type that knows about IUserMethods...
// eslint-disable-next-line @typescript-eslint/ban-types
type TourModel = Model<ITour, {}, ITourMethods>

export { ITour, ITourMethods, TourModel }
