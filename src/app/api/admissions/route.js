import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(request) {
    try {
        const body = await request.json(); // ✅ Parse JSON data

        const requiredFields = ["name", "email", "password", "phone", "institute"];
        for (let field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json({ error: `❌ Missing required field: ${field}` }, { status: 400 });
            }
        }

        const { name, email, password, phone, institute } = body;

        const client = await clientPromise;
        const db = client.db("admission_management");

        const userCount = await db.collection("users").countDocuments();
        let role = userCount === 0 ? "admin" : userCount === 1 ? "subadmin" : "user";

        let user;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            user = userCredential.user;
            console.log("✅ Firebase User Created:", user.uid);
        } catch (firebaseError) {
            return NextResponse.json({ error: firebaseError.message }, { status: 500 });
        }

        await db.collection("users").insertOne({
            uid: user.uid,
            name,
            email,
            phone,
            institute,
            role,
            createdAt: new Date(),
        });

        return NextResponse.json({ message: "✅ Admission and user registration successful", role }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "❌ Internal server error" }, { status: 500 });
    }
}
