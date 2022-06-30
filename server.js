import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import ingridientsRoutes from "./routes/ingridentsRoute.js"

const app =express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;


//GET request
app.get("/", (req, res)=> {
    res.send("Hello World!")
});

//http://localhost:5000/users
app.use("/ingridients", ingridientsRoutes);

mongoose.connect(process.env.MONGODB_URL)
.then(()=>app.listen(PORT, ()=> console.log(`Server running on port: `, PORT)))
.catch((error)=> console.log(error));