'use client';  // This marks the file as a client-side component

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
      const response = await fetch('/api/admissions', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Admission submitted successfully!');
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      alert('❌ Error submitting admission');
      console.error("❌ Submission Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 text-white min-h-screen">
      {/* Admission Form */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-8 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Admission Form
        </h2>
        <form onSubmit={handleSubmit} className="bg-green-700/50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name of Pupil" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="institute" placeholder="Institute Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="file" name="aadhaar" onChange={handleChange} className="block text-white" />
            <input type="file" name="tc" onChange={handleChange} className="block text-white" />
            <input type="file" name="pupilPhoto" onChange={handleChange} className="block text-white" />
            <input type="file" name="signature" onChange={handleChange} className="block text-white" />
          </div>
          <button type="submit" className="mt-6 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl shadow-xl">
            Submit Admission
          </button>
        </form>
      </section>
    </div>
  );
}
