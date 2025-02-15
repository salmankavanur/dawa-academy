"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fontsource/anek-malayalam";
import "@fontsource/poppins";

export default function Admission() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    guardianName: "",
    relation: "",
    address: "",
    dob: "",
    phone: "",
    whatsapp: "",
    email: "",
    password: "",
    institute: "",
    studiedBefore: "NO",
    prevInstitute: "",
    studyYears: "",
    lastMadrassaClass: "",
    lastSchoolClass: "",
  });

  const [files, setFiles] = useState({
    aadhaar: null,
    tc: null,
    pupilPhoto: null,
    signature: null,
  });

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

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Append file fields
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        formDataToSend.append(key, file);
      }
    });

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
    <div className="bg-gradient-to-b from-green-900 to-green-800 text-white min-h-screen">
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-8 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Admission Form
        </h2>
        {message && <p className="text-center text-lg font-semibold">{message}</p>}
        <form onSubmit={handleSubmit} className="bg-green-700/50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name of Pupil" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="guardianName" placeholder="Guardian's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="relation" placeholder="Relation with the Child" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="whatsapp" placeholder="Whatsapp Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <select name="studiedBefore" onChange={handleChange} className="p-4 rounded-md bg-white/10 border text-white">
              <option value="NO">NO</option>
              <option value="YES">YES</option>
            </select>
            <input type="text" name="prevInstitute" placeholder="Previous Institute" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="studyYears" placeholder="Years of Study" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="lastMadrassaClass" placeholder="Last Class in Madrassa" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="lastSchoolClass" placeholder="Last Class in School" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <label className="text-white">Aadhaar: <input type="file" name="aadhaar" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">School Transfer Certificate (TC): <input type="file" name="tc" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Pupils Photo: <input type="file" name="pupilPhoto" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Signature: <input type="file" name="signature" onChange={handleChange} className="block text-white" /></label>
          </div>
          <button type="submit" className="mt-6 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl shadow-xl" disabled={loading}>
            {loading ? "Submitting..." : "Submit Admission"}
          </button>
        </form>
      </section>
    </div>
  );
}
