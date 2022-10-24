import express from "express";
import userRoutes from "./routes/UserRoutes.js"
import db from "./configs/db.js"
import User from "./models/UserModel.js";
const app = express()
const port = 3000

try {
  await db.authenticate()
  User.sync()
  console.log("Database connected successfully.");
} catch (error) {
  console.log(error);
}

app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})