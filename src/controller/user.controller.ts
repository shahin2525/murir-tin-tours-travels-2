import { Request, Response } from 'express'
import { UserService } from '../services/user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await UserService.createUserIntoDB(userData)
    res.status(200).json({
      status: 'success',
      message: 'user created successfully',
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

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserIntoDB()
    res.status(200).json({
      status: 'success',
      message: 'get all user successfully',
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
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await UserService.getSingleUser(userId)
    res.status(200).json({
      status: 'success',
      message: 'get single user successfully',
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
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const userData = req.body
    const result = await UserService.updateUser(userId, userData)
    res.status(200).json({
      status: 'success',
      message: 'update user successfully',
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
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    await UserService.deleteUser(userId)
    res.status(200).json({
      status: 'success',
      message: 'delete user successfully',
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      status: 'fail',
      message: error.message || 'something went wrong',
    })
  }
}
export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
}
