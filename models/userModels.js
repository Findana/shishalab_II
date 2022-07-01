import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{type:String,required:true,},

    lastName:{type:String,required:true,},

    email:{type:String,required:true,},

    password:{type:password,required:true,},



})

const userModel = mongoose.model("User",userSchema)
export default userModel;