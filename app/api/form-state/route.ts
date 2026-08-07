import { NextResponse } from "next/server";
import { getFormState } from "@/lib/form-store";

export async function GET() {
  return NextResponse.json(getFormState());
}