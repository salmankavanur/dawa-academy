import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get("email");
        if (!email) {
            return NextResponse.json({ error: "❌ Email is required" }, { status: 400 });
        }

        // ✅ Define PDF Path
        const userFolder = path.join(process.cwd(), "public/uploads", email);
        await fs.promises.mkdir(userFolder, { recursive: true });

        const pdfPath = path.join(userFolder, "application_form.pdf");

        // ✅ Create PDF and use a custom font
        const doc = new PDFDocument();
        const pdfStream = fs.createWriteStream(pdfPath);
        doc.pipe(pdfStream);

        // ✅ Load custom font (Ensure the font file exists)
        const fontPath = path.join(process.cwd(), "public/fonts/Arial.ttf");
        if (fs.existsSync(fontPath)) {
            doc.font(fontPath);
        } else {
            console.warn("⚠️ Font not found, using default");
            doc.font("Times-Roman"); // Fallback to built-in font
        }

        doc.fontSize(20).text("Application Form", { align: "center" });
        doc.moveDown();
        doc.fontSize(14).text(`Email: ${email}`);
        doc.text(`Date: ${new Date().toLocaleDateString()}`);
        doc.end();

        return NextResponse.json({
            message: "✅ PDF Generated Successfully",
            pdfUrl: `/uploads/${email}/application_form.pdf`,
        }, { status: 201 });

    } catch (error) {
        console.error("❌ Error generating PDF:", error);
        return NextResponse.json({ error: "❌ Internal server error" }, { status: 500 });
    }
}
