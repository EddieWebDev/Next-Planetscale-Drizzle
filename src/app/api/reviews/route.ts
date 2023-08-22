import { NextResponse } from "next/server";
import getAllReviews from "@/lib/getAllReviews";

export async function GET(request: Request) {
  const reviews = await getAllReviews();
  return NextResponse.json(reviews);
}
