// models/User.ts
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone:{
    type:String,
    unique:true,
    required:false
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  // employee info
  skills:{
    type:[]
    ,required:false
  },
  experience:{
    type:[]
    ,required:false
  },
  education:{
    type:[]
    ,required:false
  },
  carrierObjective:{
    type:String
    ,required:false
  },
  // employer info
  establishmentYear:{
    type:String,
    required:false
  },
  companySize:{
    type:String,
    require:false
  },
  website:{
    type:String,
    required:false
  },
  about:{
    type:String,
    required:false
  },
  address:{
    type:String,
    required:false
  }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User