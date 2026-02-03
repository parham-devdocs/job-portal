import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

},{timestamps:true})


const userModel=mongoose.model("User")
mongoose.deleteModel(userModel.modelName)
const newUserModel=mongoose.model("User",userSchema)

export default newUserModel