import { NextResponse } from "next/server";
import { updateFormField } from "@/lib/form-store";

export async function POST(req: Request) {
  const body = await req.json();

  const { field, value } = body;

  if (
    (field !== "full_name" &&
      field !== "phone_number") ||
    typeof value !== "string"
  ) {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 }
    );
  }

  updateFormField(field, value);

  return NextResponse.json({
    success: true,
    field,
    value,
  });
}