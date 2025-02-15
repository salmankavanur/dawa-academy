import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const { uid, userName, email, contact, institute } = await req.json();
        const client = await clientPromise;
        const db = client.db("admission_management");

        // Count users to determine the role
        const userCount = await db.collection("users").countDocuments();

        let role = "user"; // Default role
        if (userCount === 0) {
            role = "admin"; // First user is admin
        } else if (userCount === 1) {
            role = "subadmin"; // Second user is subadmin
        }

        // Check if user already exists
        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            role = existingUser.role; // Keep existing role
        }

        // Insert user with role field
        await db.collection("users").updateOne(
            { email },
            { $set: { uid, userName, email, contact, institute, role } },
            { upsert: true }
        );

        console.log(`✅ User Registered - Role: ${role}`);
        return NextResponse.json({ message: "User registered successfully", role }, { status: 200 });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
