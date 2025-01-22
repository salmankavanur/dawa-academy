"use client";

import { useState } from "react";

export default function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    institute: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    relation: "",
    address: "",
    dob: "",
    whatsapp: "",
    studiedBefore: "NO",
    prevInstitute: "",
    studyYears: "",
    lastMadrassaClass: "",
    lastSchoolClass: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "password", "phone", "institute"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        setMessage(`❌ Please fill in all required fields: ${field}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/admissions", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Admission submitted successfully!");
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("❌ Error submitting admission.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="border p-2 w-full" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="institute" placeholder="Institute Name" onChange={handleChange} required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
