// src/lib/firebaseAdmin.js
import admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS)),
    });
}

export default admin;
