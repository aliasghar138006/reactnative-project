import ToplearnUser from "@/models/TopLearnUser";
import Connect from "@/utils/Connect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, email, password } = await req.json();
  await Connect();
  const user = await ToplearnUser.findOne({ email });
  if (user) {
    return NextResponse.json({ status: 422, message: "User Already Exist." });
  }
  const newUser = await ToplearnUser.create({
    fullName,
    password,
    email,
  });
  await Connect();
  return NextResponse.json({
    status: 201,
    message: "user Created",
    data: newUser,
  });
}
