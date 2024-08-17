import express from 'express'
import { UserController } from '../controller/user.controller'
const router = express.Router()
router.post('/create-user', UserController.createUser)
router.get('/', UserController.getAllUser)
router.get('/:userId', UserController.getSingleUser)
export const UserRouter = router
