import { NextResponse, NextRequest } from "next/server";
export async function GET(Request) {
  // const req = new Request().cookies()
  console.log(Request)
  return new Response("aa");
}
