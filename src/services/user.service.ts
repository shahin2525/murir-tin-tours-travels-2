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
const updateUser = async (
  id: string,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  })
  return result
}
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id)
  return result
}
export const UserService = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUser,
  updateUser,
  deleteUser,
}
