import { NextRequest, NextResponse } from "next/server";

export async  function GET (request:NextRequest)  {
    try {
     
      return NextResponse.json({message:"data fetched successfuly"})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
}

