import { model, Schema } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  photo: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['user', 'admin'],
    default: 'user',
  },
  userStatus: {
    type: String,
    required: [true, 'User status is required'],
    enum: ['active', 'inactive'],
    default: 'active',
  },
})

export const User = model<IUser>('User', userSchema)
