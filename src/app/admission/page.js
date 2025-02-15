'use client';  

import { useState } from "react"; 
import Image from "next/image"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; 
import Link from "next/link"; 
import { auth, createUserWithEmailAndPassword } from "@/lib/firebase"; // Firebase Auth
import { useRouter } from "next/navigation";
import "@fontsource/anek-malayalam";  
import "@fontsource/poppins";   

export default function Admission() {
  const router = useRouter();
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
    email: "", // ✅ Add Email Field for Registration
    password: "", // ✅ Add Password Field for Authentication
    aadhaar: null,
    tc: null,
    pupilPhoto: null,
    signature: null,
    studiedBefore: "NO",
    prevInstitute: "",
    studyYears: "",
    lastMadrassaClass: "",
    lastSchoolClass: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Step 1: Register User in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // ✅ Step 2: Store Admission Data in MongoDB
      const response = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, uid: user.uid }), // Include UID for authentication
      });

      if (response.ok) {
        alert('Admission submitted successfully!');
        router.push("/user"); // ✅ Redirect to User Dashboard after submission
      } else {
        throw new Error('Error submitting admission');
      }
    } catch (error) {
      alert(error.message);
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
            {/* Name, Guardian & Contact Details */}
            <input type="text" name="name" placeholder="Name of Pupil" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="guardianName" placeholder="Guardian's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="relation" placeholder="Relation with Child" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            
            {/* ✅ Email & Password Fields for Authentication */}
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="whatsapp" placeholder="WhatsApp Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border text-white" />
            
            {/* File Uploads */}
            <label className="text-white">Aadhaar: <input type="file" name="aadhaar" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">School TC: <input type="file" name="tc" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Pupil's Photo: <input type="file" name="pupilPhoto" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Signature: <input type="file" name="signature" onChange={handleChange} className="block text-white" /></label>
            
            {/* Previous Study Details */}
            <label className="text-white">Studied Before? 
              <select name="studiedBefore" onChange={handleChange} className="p-2 rounded-md bg-white/10 border text-white">
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </label>
            <input type="text" name="prevInstitute" placeholder="Previous Institute" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="studyYears" placeholder="Years of Study" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="lastMadrassaClass" placeholder="Last Class in Madrassa" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
            <input type="text" name="lastSchoolClass" placeholder="Last Class in School" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border text-white" />
          </div>
          <button type="submit" className="mt-6 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl shadow-xl">
            Submit Admission
          </button>
        </form>
      </section>
    </div>
  );
}
