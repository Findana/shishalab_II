import express from "express"
import { createPost, getIngridients } from "../controllers/ingridientsController.js";

const router = express.Router()

//GET request
//http:localhost:5000/ingridients
router.get("/",getIngridients);

//POST request
router.post("/", createPost)

export default router;