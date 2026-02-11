import { NextRequest, NextResponse } from "next/server";
import { connectDB}from "../../dbConfig";
import User from "../../../../models/userModel";
import { RegisterInfo} from "../../../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
connectDB()
export async function POST(request:NextRequest) {

    try {
        const body:RegisterInfo=await request.json()
        const user=await User.findOne({email:body.email})
        if (!user) {
            throw new Error("user does not exist")
        }
      const validatedPassword=bcrypt.compare(body.password,user.password)
      if (!validatedPassword) {
        throw new Error("authentication failed")
      }

    const jwtPayload={userId:user._id,email:user.email}
    const token=jwt.sign(jwtPayload,process.env.ACCESS_TOKEN_KEY!,{expiresIn:"1d"})

const response=NextResponse.json({message:"Login Successful"},{status:200})
response.cookies.set("token",token,{httpOnly:true,maxAge:60*60*24*1000})
return response
    } catch (error:any) {
        return Response.json({message:error.message},{status:500})
    }
}