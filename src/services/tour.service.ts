import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTourIntoDB = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData)
  return result
}
const getAllTourIntoDB = async (): Promise<ITour[]> => {
  const result = await Tour.find()
  return result
}
const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findOne({ _id: id }).populate('review')
  return result
}
const updateTour = async (
  id: string,
  tourData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, tourData, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

const getNextSchedule = async (id: string): Promise<any> => {
  const tour = await Tour.findById(id)
  const nextSchedule = tour?.getNextNearestStartDateAndEndDate()
  return {
    tour,
    nextSchedule,
  }
}
export const TourService = {
  createTourIntoDB,
  getAllTourIntoDB,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
