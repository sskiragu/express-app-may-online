import express from "express";
import { getAllUsers, createUser, updateUser, deleteUser } from "../controllers/UserController.js"

const router = express.Router()

router.get('/users', getAllUsers);

router.post('/users', createUser);

router.patch('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

export default router