import express from 'express'
import { ReviewController } from '../controller/review.controller'
const router = express.Router()
router.post('/create-review', ReviewController.createReview)
router.get('/', ReviewController.getAllReview)
router.get('/:reviewId', ReviewController.getSingleReview)
router.patch('/:reviewId', ReviewController.updateReview)
router.delete('/:reviewId', ReviewController.deleteReview)
// router.get('/:reviewId/getNextSchedule', ReviewController.deleteReview)
export const ReviewRouter = router
