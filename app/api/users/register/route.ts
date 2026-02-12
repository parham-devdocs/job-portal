import { NextRequest, NextResponse } from "next/server";
import { connectDB} from "../../dbConfig";
import User from "../../../../models/userModel";
import { RegisterInfo} from "../../../types";
import bcrypt from "bcryptjs";
connectDB()
export async function POST(request:NextRequest) {

    try {
        const body:RegisterInfo=await request.json()
        console.log(body)
        const user=await User.findOne({email:body.email})
        if (user) {
            throw new Error("user already exists")
        }
        const salt=await bcrypt.genSalt(10)
        const encryptedPassword=await bcrypt.hash(body.password,salt)
        body.password=encryptedPassword
        await User.create(body)
        return NextResponse.json({message:"user created successfully",status:201})
    } catch (error:any) {
        return Response.json({message:error.message},{status:500})
    }
}