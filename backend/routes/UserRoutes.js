import express from "express";
import { getAllUsers, createUser, updateUser } from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getAllUsers);

router.post('/users', createUser);

router.patch('/users/:id', updateUser)

export default router