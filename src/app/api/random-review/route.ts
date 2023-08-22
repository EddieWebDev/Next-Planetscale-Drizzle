import { NextResponse } from "next/server";
import getRandomReview from "@/lib/getRandomReview";

export async function GET(request: Request) {
  const review = await getRandomReview();
  return NextResponse.json(review);
}
