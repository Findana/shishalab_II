import userModel from "../models/userModels.js";
//import bcrypt form "bcryptjs";
import jwt from "jsonwebtoken";


export const userSignup = async (req,res) =>{
    const {firstName, lastName, email, password}=req.body ;
    try { 
        //check user is exists
        let existingUser=await userModel.findOne({email});
        if (existingUser){
            return res.status(400).json({msg:"User Alrady Exists"})
        }
        //create now user
        const newUser = new userModel({
            firstName,
            lastName,
            email,
            password

        });
        await newUser.save()
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
};