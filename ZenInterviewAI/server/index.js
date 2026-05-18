import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/authent.js"
import userRouter from "./routes/user.route.js"
import InterviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

const app= express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
""
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/interview", InterviewRouter)
app.use("/api/payment", paymentRouter)

const PORT= process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
    connectDB()
})

