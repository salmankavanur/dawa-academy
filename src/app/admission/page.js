'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/anek-malayalam";
import "@fontsource/poppins";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-lg shadow-lg ${
        scrolled ? "bg-green-800/60 py-1" : "bg-transparent py-3"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/Logo.png"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Islamic Dawa Academy Logo"
              priority
            />
          </div>
          <span className="text-lg font-semibold text-white font-['Poppins'] tracking-wide">
            Islamic Dawa Academy
          </span>
        </Link>
      </div>
    </nav>
  );
};

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
    aadhaar: null,
    tc: null,
    pupilPhoto: null,
    signature: null,
    studiedBefore: "NO",
    prevInstitute: "",
    studyYears: "",
    lastMadrassaClass: "",
    lastSchoolClass: "",
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
    
    const response = await fetch("/api/admissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert("Admission submitted successfully!");
    } else {
      alert("Error submitting admission");
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 text-white min-h-screen">
      <Navbar />
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-8 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Admission Form
        </h2>
        <form onSubmit={handleSubmit} className="bg-green-700/50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name of Pupil" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="guardianName" placeholder="Guardian's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="relation" placeholder="Relation with the Child" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="date" name="dob" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="whatsapp" placeholder="Whatsapp Number" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <label className="text-white">Aadhaar: <input type="file" name="aadhaar" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">School Transfer Certificate (TC): <input type="file" name="tc" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Pupil's Photo: <input type="file" name="pupilPhoto" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Signature: <input type="file" name="signature" onChange={handleChange} className="block text-white" /></label>
            <label className="text-white">Studied in any institution before?: 
              <select name="studiedBefore" onChange={handleChange} className="p-2 rounded-md bg-white/10 border text-white">
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </label>
            {formData.studiedBefore === "YES" && (
              <>
                <input type="text" name="prevInstitute" placeholder="Previous Institute" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
                <input type="text" name="studyYears" placeholder="Years of Study" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
              </>
            )}
            <input type="text" name="lastMadrassaClass" placeholder="Last Class in Madrassa" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="lastSchoolClass" placeholder="Last Class in School" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
          </div>
          <button type="submit" className="mt-6 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl shadow-xl">
            Submit Admission
          </button>
        </form>
      </section>
    </div>
  );
}
