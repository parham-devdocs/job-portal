import { NextRequest, NextResponse } from "next/server";
import { veifyJWT } from "../../../helpers/verifyJWT";
import User from "@/models/userModel";

export async  function GET (request:NextRequest)  {
    try {
      const userId=await veifyJWT(request)
      const user=await User.findById(userId)
      if (!user) {
        throw new Error("no user found")
      }
      return NextResponse.json({message:"data fetched successfuly",data:user})
      return NextResponse.json({res:userId})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
}

