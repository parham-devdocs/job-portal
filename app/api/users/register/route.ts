import { NextRequest, NextResponse } from "next/server";
import { DbConfig } from "../../dbConfig";
import User from "../../../../models/userModel";
import { RegisterInfo} from "../../../types";
DbConfig()
export async function POST(request:NextRequest) {

    try {
        const body:RegisterInfo=await request.json()
        const user=await User.findOne({email:body.email})
        if (user) {
            throw new Error("user already exists")
        }
        
    } catch (error:any) {
        return Response.json({message:error.message},{status:500})
    }
}