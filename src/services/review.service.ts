import { IReview } from '../interfaces/review.interface'
import Review from '../models/review.model'

const createReviewIntoDB = async (reviewData: IReview): Promise<IReview> => {
  const result = await Review.create(reviewData)
  if (result) {
    Review.calRatingAvg(result.tour)
  }
  return result
}
const getAllReviewIntoDB = async (): Promise<IReview[]> => {
  const result = await Review.find().populate({
    path: 'user',
    select: 'name photo -_id',
  })
  return result
}
const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findOne({ _id: id })
  return result
}
const updateReview = async (
  id: string,
  reviewData: IReview,
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, reviewData, {
    new: true,
    runValidators: true,
  })
  if (result) {
    Review.calRatingAvg(result.tour)
  }
  return result
}
const deleteReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findByIdAndDelete(id)
  if (result) {
    Review.calRatingAvg(result.tour)
  }
  return result
}

export const ReviewService = {
  createReviewIntoDB,
  getAllReviewIntoDB,
  getSingleReview,
  updateReview,
  deleteReview,
}
