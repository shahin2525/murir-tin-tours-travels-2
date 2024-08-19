import { Request, Response } from 'express'
import { TourService } from '../services/tour.service'

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await TourService.createTourIntoDB(tourData)
    res.status(200).json({
      status: 'success',
      message: 'tour created successfully',
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

const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await TourService.getAllTourIntoDB()
    res.status(200).json({
      status: 'success',
      message: 'get all tour successfully',
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
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { tourId } = req.params
    const result = await TourService.getSingleTour(tourId)
    res.status(200).json({
      status: 'success',
      message: 'get single tour successfully',
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
const updateTour = async (req: Request, res: Response) => {
  try {
    const { tourId } = req.params
    const tourData = req.body
    const result = await TourService.updateTour(tourId, tourData)
    res.status(200).json({
      status: 'success',
      message: 'update tour successfully',
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
const deleteTour = async (req: Request, res: Response) => {
  try {
    const { tourId } = req.params
    await TourService.deleteTour(tourId)
    res.status(200).json({
      status: 'success',
      message: 'delete tour successfully',
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}
export const TourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour,
}
