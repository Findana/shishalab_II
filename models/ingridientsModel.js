import mongoose from 'mongoose'

const ingridientsSchema = mongoose.Schema({
    name: String,
    description: String,
    });

const Ingridients = mongoose.model("Ingridient", ingridientsSchema);

export default Ingridients;