
import express from "express"
import isAuth from "../middlewares/isauth.js"
import {analyzeResume, finishInterview, generateQuestion,getMyInterviews,getInterviewReport, submitAnswer} from "../controller/Interview.controller.js"
import { upload } from "../middlewares/multer.js"

const InterviewRouter = express.Router()

InterviewRouter.post("/resume",isAuth,upload.single("resume"),analyzeResume)
InterviewRouter.post("/generate-questions",isAuth, generateQuestion)
InterviewRouter.post("/submit-answer",isAuth, submitAnswer)
InterviewRouter.post("/finish",isAuth,finishInterview)

InterviewRouter.get("/get-interview",isAuth,getMyInterviews)
InterviewRouter.get("/report/:id",isAuth,getInterviewReport)

export default InterviewRouter