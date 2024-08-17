import { User } from '../models/user.model'
import { IUser } from '../interfaces/user.interface'

const createUserIntoDB = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData)
  return result
}
const getAllUserIntoDB = async (): Promise<IUser[]> => {
  const result = await User.find()
  return result
}
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id })
  return result
}
export const UserService = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUser,
}
