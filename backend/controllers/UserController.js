import User from "../models/UserModel.js"

export const createUser = async (req , res) => {
    try {
        await User.create(req.body)
        res.json({message: "User Created Successfully."})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where:{
                id: req.params.id
            }
        })
        res.json({message: "Record updated."})
    } catch (error) {
        res.json({message: error.message})
    }
}