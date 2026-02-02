import { NextRequest, NextResponse } from "next/server";


async function POST(request:NextRequest) {
    return NextResponse.json({message:"user/register a[i accessed wth post method"})
}