import User from "../models/UserModel.js"

export const createUser = async (req , res) => {
    try {
        await User.create(req.body)
        res.json({message: "User Created Successfully."})
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllUsers = (req, res) => {
    res.status(200).send({"message": "All users"})
}