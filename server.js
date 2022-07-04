import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config" ;
import ingridientsRoutes from "./routes/ingridentsRoute.js"
import connectDatabase from "./config/mongoDb.js"
import importData from "./dataImport.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import productRoute from "./routes/ProductRoutes.js";


const app = express();
const port = process.env.PORT;
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());


// API
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.PAYPAL_CLIENT_ID);
// });

// ERROR HANDLER
// app.use(notFound);
// app.use(errorHandler);


//GET request
app.get("/", (req, res)=> {
    res.send("Hello World!")
});

app.use("/profile", userRouter);


//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });

//http://localhost:5000/ingridients
app.use("/ingridients", ingridientsRoutes);

// mongoose.connect(process.env.MONGODB_URL || ``)
app.listen(port,()=> {
  console.log(`server listening on port:${port}`)
})
// .catch((error)=> console.log(error));
