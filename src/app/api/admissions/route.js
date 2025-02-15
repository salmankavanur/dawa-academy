import clientPromise from "@/lib/mongodb";
import Admission from '@/lib/admissionModel';

export async function POST(req) {
  try {
    const formData = await req.json();

    const client = await clientPromise;
    const db = client.db("admission_management");

    // Insert admission data into MongoDB
    const result = await db.collection("admissions").insertOne(formData);

    if (!result.acknowledged) {
      throw new Error("Failed to insert admission data");
    }

    return new Response(JSON.stringify({ message: "Admission submitted successfully" }), { status: 200 });

  } catch (error) {
    console.error("Error submitting admission:", error);
    return new Response(JSON.stringify({ error: "Error submitting admission" }), { status: 500 });
  }
}

// Fetch admissions for admin
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("admission_management");

    const admissions = await db.collection("admissions").find({}).toArray();

    if (!admissions || admissions.length === 0) {
      return new Response(JSON.stringify({ error: "No admissions found" }), { status: 404 });
    }

    return new Response(JSON.stringify(admissions), { status: 200 });

  } catch (error) {
    console.error("Error fetching admissions:", error);
    return new Response(JSON.stringify({ error: "Error fetching admissions" }), { status: 500 });
  }
}
