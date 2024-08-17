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

export const UserController = {
  createUser,
}
