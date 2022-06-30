import Ingridients from "../models/ingridientsModel.js"


//GET 
export const getIngridients = async (req,res) => {
    try {
        const result = await Ingridients.find(); res.status(200).json(result);
        }
    catch (error){
    console.log(error);
    }
};

//POST
export const createPost = async (req, res) => {
    const post = req.body

    try {
        const newPost = new Ingridients(post)
        await newPost.save()
        res.status(201).json(newPost)        
    } catch (error) {
        res.status(409).json({msg: error.message});
    }
};