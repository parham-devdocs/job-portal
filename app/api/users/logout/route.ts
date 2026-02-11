import { NextRequest, NextResponse } from "next/server";
import {connectDB}  from "../../dbConfig";


connectDB()
export async function POST(request:NextRequest) {

    try {
       const response= NextResponse.json({message:"logged out  successfully",status:201})
       response.cookies.set("token","",{maxAge:0})
        return response
    } catch (error:any) {
        return Response.json({message:error.message},{status:500})
    }
}