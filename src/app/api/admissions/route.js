import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(request) {
    try {
        const formData = await request.formData();
        console.log("📤 Received Admission Data:", formData);

        // Extracting fields from FormData
        const extractedData = {};
        for (const [key, value] of formData.entries()) {
            extractedData[key] = value;
        }

        const {
            name, fatherName, motherName, guardianName, relation,
            address, dob, phone, whatsapp, email, password, institute,
            studiedBefore, prevInstitute, studyYears, lastMadrassaClass, lastSchoolClass
        } = extractedData;

        // Handle File Uploads (Here, we store file names. You can integrate Cloudinary or Firebase Storage)
        const aadhaar = formData.get("aadhaar")?.name || null;
        const tc = formData.get("tc")?.name || null;
        const pupilPhoto = formData.get("pupilPhoto")?.name || null;
        const signature = formData.get("signature")?.name || null;

        if (!email || !password || !name || !phone || !institute) {
            return NextResponse.json({ error: "❌ Missing required fields" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("admission_management");

        // Check if first user should be admin
        const userCount = await db.collection("users").countDocuments();
        let role = userCount === 0 ? "admin" : userCount === 1 ? "subadmin" : "user";

        // Create user in Firebase Authentication
        let user;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            user = userCredential.user;
            console.log("✅ Firebase User Created:", user.uid);
        } catch (firebaseError) {
            return NextResponse.json({ error: firebaseError.message }, { status: 500 });
        }

        await db.collection("admissions").insertOne({
            uid: user.uid,
            name, fatherName, motherName, guardianName, relation,
            address, dob, phone, whatsapp, email, institute,
            studiedBefore, prevInstitute, studyYears, lastMadrassaClass, lastSchoolClass,
            aadhaar, tc, pupilPhoto, signature,
            createdAt: new Date()
        });

        await db.collection("users").insertOne({
            uid: user.uid,
            name, email, phone, institute, role,
            createdAt: new Date()
        });

        return NextResponse.json({ message: "✅ Admission and user registration successful", role }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "❌ Internal server error" }, { status: 500 });
    }
}
