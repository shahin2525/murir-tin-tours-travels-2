import { Request, Response } from 'express'
import { ReviewService } from '../services/review.service'

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const result = await ReviewService.createReviewIntoDB(reviewData)
    res.status(200).json({
      status: 'success',
      message: 'review created successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}

const getAllReview = async (req: Request, res: Response) => {
  try {
    const result = await ReviewService.getAllReviewIntoDB()
    res.status(200).json({
      status: 'success',
      message: 'get all review successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}
const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params
    const result = await ReviewService.getSingleReview(reviewId)
    res.status(200).json({
      status: 'success',
      message: 'get single review successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}
const updateReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params
    const reviewData = req.body
    const result = await ReviewService.updateReview(reviewId, reviewData)
    res.status(200).json({
      status: 'success',
      message: 'update review successfully',
      data: result,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}
const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params
    await ReviewService.deleteReview(reviewId)
    res.status(200).json({
      status: 'success',
      message: 'delete review successfully',
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}

// const getNextSchedule = async (req: Request, res: Response) => {
//   try {
//     const { reviewId } = req.params
//     const result = await ReviewService.getNextSchedule(reviewId)
//     res.status(200).json({
//       status: 'success',
//       message: 'get single review successfully',
//       data: result,
//     })
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     res.status(500).json({
//       status: 'fail',
//       message: error.message || 'something went wrong',
//     })
//   }
// }
export const ReviewController = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview,
  //   getNextSchedule,
}
