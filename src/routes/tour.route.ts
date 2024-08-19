import express from 'express'
import { TourController } from '../controller/tour.controller'
const router = express.Router()
router.post('/create-tour', TourController.createTour)
router.get('/', TourController.getAllTour)
router.get('/:tourId', TourController.getSingleTour)
router.patch('/:tourId', TourController.updateTour)
router.delete('/:tourId', TourController.deleteTour)
export const TourRouter = router
