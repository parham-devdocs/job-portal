import { NextRequest, NextResponse } from "next/server";
import { veifyJWT } from "../../../helpers/verifyJWT";
import User from "@/models/userModel";
import { connectDB } from "../../dbConfig"; // Import the connection helper

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const userId = await veifyJWT(request);
    
    if (!userId) {
      return NextResponse.json(
        { message: "Invalid or missing token" },
        { status: 401 }
      );
    }

    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Data fetched successfully",
      data: user
    });

  } catch (error: any) {
    console.error("Error in GET user:", error);
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}