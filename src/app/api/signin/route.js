import ToplearnUser from "@/models/TopLearnUser";
import Connect from "@/utils/Connect";
import { NextResponse } from "next/server";
import { Jwt, sign } from "jsonwebtoken";
import Encoder from "@/utils/Encode";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        status: 401,
        message: "please fill all fields",
      });
    }
    await Connect();
    const user = await ToplearnUser.findOne({ email });
    if (!user) {
      return NextResponse.json({ status: 404, message: "user not found" });
    }
    if (password !== user.password) {
      return NextResponse.json({
        status: 422,
        message: "email or password not correct",
      });
    }
    const token = Encoder({ email, password }, "secret");
    return NextResponse.json({
      status: 200,
      message: "Correct Login",
      data: token,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server error" });
  }
}
