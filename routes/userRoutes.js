import express from "express"
import { userSignup } from "../controllers/userControllers.js"


const router = express.Router()

router.post("/signup",userSignup)

export default router ;

