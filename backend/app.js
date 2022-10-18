import express from "express";
import userRoutes from "./routes/UserRoutes.js"
const app = express()
const port = 3000

app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})