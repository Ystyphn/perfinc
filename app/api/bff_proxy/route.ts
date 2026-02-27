import { auth } from "@/auth"
import { NextResponse } from "next/server";


export async function GET(request: Request){
  const session = await auth();

  if (!session) {
    throw new Error("User is not authenticated. You can't perform GET action");
  }

  const res = await request.json();
  if (res.email){
    console.log("BFF has received the email! ", res.email)
  } else {
    console.log("Your request has no email");
  }

  return Response.json(res);
}


export async function POST(request: Request){
  const session = await auth();

  if (!session){
    throw new Error("User is not authenticated. You can't perform POST action");
  }

  const req = await request.json(); // Jsonize the request only
  const email: string = req.email;

  return NextResponse.json(
    { 
      status: 201,
      message: `Woah! Your email was: ${email}!`,
    }
  );
}