import express from 'express'
import { UserController } from '../controller/user.controller'
const router = express.Router()
router.post('/create-user', UserController.createUser)
router.get('/', UserController.getAllUser)
router.get('/:userId', UserController.getSingleUser)
router.patch('/:userId', UserController.updateUser)
router.delete('/:userId', UserController.deleteUser)
export const UserRouter = router
