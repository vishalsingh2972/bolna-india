import PDFDocument from "pdfkit";
import { getFormState } from "@/lib/form-store";

export async function GET() {
  const form = getFormState();

  const doc = new PDFDocument({ margin: 50 });
  const chunks: Buffer[] = [];

  doc.on("data", (chunk: Buffer) => chunks.push(chunk));

  const pdfReady: Promise<Buffer> = new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  doc.fontSize(20).text("Government Address Update Application", {
    align: "center",
  });

  doc.moveDown();
  doc.fontSize(12);

  doc.text(`Full Name: ${form.full_name || "-"}`);
  doc.moveDown();

  doc.text(`Mobile Number: ${form.phone_number || "-"}`);
  doc.moveDown();

  doc.text(`District: ${form.district || "-"}`);
  doc.moveDown();

  doc.text("New Address:");
  doc.text(form.new_address || "-");

  doc.moveDown(2);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`);

  doc.end();

  const pdfBuffer = await pdfReady;

  const blob = new Blob([pdfBuffer as unknown as ArrayBuffer], {
    type: "application/pdf",
  });

  return new Response(blob, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="address-update-application.pdf"',
    },
  });
}