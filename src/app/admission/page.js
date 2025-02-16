"use client";

import { useState } from "react";

export default function Admission() {
    const [formData, setFormData] = useState({
        name: "", fatherName: "", motherName: "", guardianName: "", relation: "",
        address: "", dob: "", phone: "", whatsapp: "", email: "", password: "",
        studiedBefore: "NO", prevInstitute: "", studyYears: "",
        lastMadrassaClass: "", lastSchoolClass: ""
    });

    const [files, setFiles] = useState({ aadhaar: null, tc: null, pupilPhoto: null, signature: null });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "file") {
            setFiles({ ...files, [name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const formDataToSend = new FormData();

        // ✅ Append text fields
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        // ✅ Append file fields
        Object.entries(files).forEach(([key, file]) => {
            if (file) {
                formDataToSend.append(key, file);
            }
        });

        console.log("📤 Sending Form Data:", [...formDataToSend.entries()]);

        try {
            const response = await fetch("/api/admissions", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                setMessage("✅ Admission submitted successfully!");
            } else {
                setMessage(`❌ Error: ${data.error}`);
            }
        } catch (error) {
            setMessage("❌ Error submitting admission");
            console.error("❌ Submission Error:", error);
        }

        setLoading(false);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
            {message && <p className="text-red-500">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="whatsapp" placeholder="Whatsapp Number" onChange={handleChange} required />
                <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required />
                <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required />
                <input type="text" name="guardianName" placeholder="Guardian's Name" onChange={handleChange} required />
                <input type="text" name="relation" placeholder="Relation" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required />
                <input type="file" name="aadhaar" onChange={handleChange} />
                <input type="file" name="tc" onChange={handleChange} />
                <input type="file" name="pupilPhoto" onChange={handleChange} />
                <input type="file" name="signature" onChange={handleChange} />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Admission"}
                </button>
            </form>
        </div>
    );
}
