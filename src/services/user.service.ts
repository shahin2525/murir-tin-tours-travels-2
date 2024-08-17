import { User } from '../models/user.model'
import { IUser } from '../interfaces/user.interface'

const createUserIntoDB = async (userData: IUser) => {
  const result = await User.create(userData)
  return result
}

export const UserService = {
  createUserIntoDB,
}
