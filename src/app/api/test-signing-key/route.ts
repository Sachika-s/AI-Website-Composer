import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // do something
  return NextResponse.json({ message: "Hello world" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ received: body });
}

