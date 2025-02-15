

this is folder structure 
admission-management/
│── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── route.js           
│   │   │   ├── users/
│   │   │   │   ├── route.js            
│   │   │   ├── admin/
│   │   │   │   ├── route.js 
|   |   |   |   ├── users/
|   |   |   |       ├──route.js
│   │   │   ├── register/
│   │   │   │   ├── route.js 
│   │   │   ├── subadmin/
│   │   │   │   ├── route.js         
│   │   │   ├── admissions/
│   │   │   │   ├── route.js           
│   │   ├── admin/
│   │   │   ├── page.jsx 
|   |   |   ├── profile/ 
│   │   │   │   ├── page.jsx
|   |   |   ├── users/ 
│   │   │   │   ├── page.jsx  
│   │   ├── admission/
│   │   │   ├── page.js       
│   │   ├── subadmin/
│   │   │   ├── page.jsx
|   |   |   ├── profile/ 
│   │   │   │   ├── page.jsx                
│   │   ├── user/
│   │   │   ├── page.jsx
|   |   |   ├── profile/ 
│   │   │   │   ├── page.jsx                  
│   │   ├── login/
│   │   │   ├── page.jsx                
│   │   ├── register/
│   │   │   ├── page.jsx                
│   │   ├── layout.js                    
│   │   ├── page.jsx                    
│   ├── components/
│   │   ├── Navbar.js                   
│   │   ├── LogoutButton.js              
│   │   ├── Sidebar.js                  
│   │   ├── AdminDashboard.js           
│   │   ├── SubadminDashboard.js         
│   │   ├── UserDashboard.js            
│   ├── context/
│   │   ├── AuthContext.js               
│   ├── lib/
│   │   ├── mongodb.js    
│   │   ├── firebase.js
│   │   ├── admissionModel.js                  
│   ├── middleware/
│   │   ├── authMiddleware.js            
│   ├── styles/
│   │   ├── globals.css                                     
│── .env.local                             
│── eslint.config.mjs                        
│── jsconfig.json                           
│── next.config.mjs                          
│── package.json                           
│── postcss.config.js 
│── postcss.config.mjs 
│── tailwind.config.js
│── tailwind.config.mjs                             



src->app->page.jsx
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fontsource/anek-malayalam";  
import "@fontsource/poppins";   

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-800 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="backdrop-blur-sm bg-green-800/80 fixed w-full z-50 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/images/Logo.png" width={50} height={50} alt="Institute Logo" className="rounded-lg hover:scale-105 transition-transform" />
          <ul className="flex space-x-8 text-lg font-['Poppins']">
            <li><Link href="#about" className="hover:text-green-300 transition-colors">About</Link></li>
            <li><Link href="#features" className="hover:text-green-300 transition-colors">Features</Link></li>
            <li><Link href="#contact" className="hover:text-green-300 transition-colors">Contact</Link></li>
            <li><Link href="/admission" className="hover:text-green-300 transition-colors">Admission</Link></li>

          </ul>
        </div>
      </nav>
      
      {/* Hero Section - Further Simplified */}
      <header className="relative min-h-screen flex items-center justify-center p-10 bg-[url('/images/pattern.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
          <Image 
            src="/images/Asset3.png" 
            width={250}
            height={250}
            alt="Hero Image" 
            className="mb-8 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-6xl font-bold font-malayalam mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            ഹാഫിളീങ്ങൾക്കായി
          </h1>
          <p className="text-xl font-malayalam mb-8">സ്പെഷ്യൽ ഇന്റഗ്രേറ്റഡ് സിലബസ്</p>
          <Link
            href="https://wa.me/919656833399"
            className="group inline-flex items-center bg-green-500 hover:bg-green-400 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-xl group-hover:scale-110 transition-transform" /> 
            Enroll Now
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            About Islamic Dawa Academy
          </h2>
          <p className="text-xl text-gray-300 font-['Poppins'] leading-relaxed">
            Islamic Dawa Academy provides high-quality Quranic and Islamic education
            with an integrated syllabus tailored for Huffaz students.
          </p>
        </div>
      </section>

 {/* Features Section */}
 <section id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Curriculum",
              description: "Integrated syllabus covering Quran, Islamic studies, and academics."
            },
            {
              title: "Experienced Scholars",
              description: "Qualified instructors providing exceptional religious guidance."
            },
            {
              title: "Modern Learning Facilities",
              description: "State-of-the-art classrooms and digital resources."
            },
            {
              title: "Quranic Research Study",
              description: "Advanced research in Quranic sciences and interpretation."
            },
            {
              title: "Special Doura Sessions",
              description: "Exclusive lectures and interactive learning sessions."
            },
            {
              title: "Integrated Dual Degree & P.G",
              description: "Earn dual academic and Islamic degrees together."
            },
            {
              title: "Multi-Linguistic Skills",
              description: "Develop fluency in multiple languages including Arabic and English."
            },
            {
              title: "Eco-Friendly Campus",
              description: "Green, sustainable environment for better learning."
            },
            {
              title: "Media Hub & I.T Lab",
              description: "Technology-driven learning with modern media tools."
            },
            {
              title: "Digital Library",
              description: "Access vast resources through an extensive digital library."
            },
            {
              title: "Skills Development",
              description: "Practical training to enhance student capabilities."
            },
            {
              title: "Creative Development",
              description: "Encouraging creativity and critical thinking."
            },
         
          ].map((feature, index) => (
            <div key={index} className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 font-['Poppins']">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info - 1/3 width */}
          <div className="bg-green-700/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
              </div>
              <p className="text-lg font-['Poppins']">+91 9656833399</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </div>
              <p className="text-lg font-['Poppins']">info@dawaacademy.in</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-600 p-3 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
              </div>
              <p className="text-lg font-['Poppins']">
                Virippadam-Akode, Vazhakkad via,<br/>
                Malappuram, Kerala - 673640
              </p>
            </div>
          </div>

          {/* Contact Form - 2/3 width */}
          <div className="md:col-span-2 bg-green-700/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-6">Send Us a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-green-600/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-green-600/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                required 
              />
              <textarea 
                placeholder="Your Message" 
                className="md:col-span-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-green-600/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none h-32" 
                required
              ></textarea>
              <button 
                type="submit" 
                className="md:col-span-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    {/* Footer Section */}
    <footer className="bg-green-900 text-center py-6 mt-10">
        <p className="text-gray-400 font-['Poppins']">
          © Islamic Dawa Academy, Akode | Powered by <Link href="https://aicedu.in" className="text-green-400 hover:text-green-300">Akode Islamic Centre</Link>
        </p>
      </footer>

      
    </div>
    
  );
}




app->layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Integrated Study Centre for Huffaz in Malabar | Islamic Dawa Academy",
  description: "Best campus for huffaz for the higher education to be a better person with outstanding skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}




app->admin->page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (loading) return; // Wait until authentication state is resolved

        if (!user || role !== "admin") {
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    }, [user, role, loading]);

    if (loading || !authorized) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold">Welcome Admin</h1>
        </div>
    );
}



app->admin->profile->page.jsx

// admission-management/src/app/admin/profile/page.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function AdminProfile() {
    const { user, role } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || role !== "admin") {
            router.push("/login");
        }
    }, [user, role]);

    if (!user) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">Admin Profile</h1>
            <p className="mt-4">Email: {user.email}</p>
            <LogoutButton />
        </div>
    );
}

app->admin->users->page.jsx

"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/api/admin/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("❌ Error fetching users:", error);
                setError("Error fetching users. Please try again later.");
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Registered Users</h1>
            {error && <p className="text-red-500">{error}</p>}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">User Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Contact</th>
                        <th className="border border-gray-300 p-2">Institute</th>
                        <th className="border border-gray-300 p-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user._id} className="text-center">
                                <td className="border border-gray-300 p-2">{user.userName}</td>
                                <td className="border border-gray-300 p-2">{user.email}</td>
                                <td className="border border-gray-300 p-2">{user.contact}</td>
                                <td className="border border-gray-300 p-2">{user.institute}</td>
                                <td className="border border-gray-300 p-2">{user.role}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4">No users found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}




app->admission->page.js

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
    
    const response = await fetch('/api/admissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert('Admission submitted successfully!');
    } else {
      alert('Error submitting admission');
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
            <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="motherName" placeholder="Mother's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="guardianName" placeholder="Guardian's Name" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="relation" placeholder="Relation with the Child" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
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
            <input type="text" name="prevInstitute" placeholder="Previous Institute" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
            <input type="text" name="studyYears" placeholder="Years of Study" onChange={handleChange} className="p-4 rounded-xl bg-white/10 border border-green-600/30 text-white" />
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




app->api->admin->route.js
// admission-management/src/app/api/admin/route.js
export async function GET() {
    return NextResponse.json({ message: 'Admin-specific data' });
}

app->api->admin->users->route.js

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("admission_management");

        // Fetch all users
        const users = await db.collection("users").find({}, { projection: { _id: 1, userName: 1, email: 1, contact: 1, institute: 1, role: 1 } }).toArray();

        if (!users || users.length === 0) {
            return NextResponse.json({ error: "No users found" }, { status: 404 });
        }

        return NextResponse.json(users, { status: 200 });

    } catch (error) {
        console.error("❌ Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}



app->api->admissions->route.js
import clientPromise from "@/lib/mongodb";
import Admission from '@/lib/admissionModel';

export async function POST(request) {
  const formData = await request.json();

  try {
    await clientPromise;

    const newAdmission = new Admission(formData);
    await newAdmission.save();

    return new Response('Admission submitted successfully', { status: 200 });
  } catch (error) {
    return new Response('Error submitting admission', { status: 500 });
  }
}




app->api->auth->route.js

import { NextResponse } from "next/server";
import { auth, signInWithEmailAndPassword } from "@/lib/firebase";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        
        // Sign in the user with Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch the user from MongoDB
        const client = await clientPromise;
        const db = client.db("admission_management");
        const dbUser = await db.collection("users").findOne({ email });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ role: dbUser.role, redirectTo: dbUser.role === "admin" ? "/admin" : dbUser.role === "subadmin" ? "/subadmin" : "/user" }, { status: 200 });
    } catch (error) {
        console.error("Login Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}


app->api->register->route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const { uid, userName, email, contact, institute } = await req.json();
        const client = await clientPromise;
        const db = client.db("admission_management");

        // Check if user already exists
        const existingUser = await db.collection("users").findOne({ email });
        let role = "user"; // Default role is user

        if (!existingUser) {
            const adminExists = await db.collection("users").findOne({ role: "admin" });
            const subadminExists = await db.collection("users").findOne({ role: "subadmin" });

            if (!adminExists) {
                role = "admin"; // First user becomes admin
            } else if (!subadminExists) {
                role = "subadmin"; // Second user becomes subadmin
            }
        } else {
            role = existingUser.role; // Maintain existing role
        }

        // Store or update user in MongoDB with the correct role
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


app->api->subadmin->route.js 

// admission-management/src/app/api/subadmin/route.js
export async function GET() {
    return NextResponse.json({ message: 'Subadmin-specific data' });
}

app->api->users->route.js 
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const email = url.searchParams.get("email");

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("admission_management");
        const user = await db.collection("users").findOne({ email });

        if (!user) {
            console.log("❌ User not found in database.");
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        console.log(`✅ User Found: ${user.email}, Role: ${user.role}`);
        return NextResponse.json({ role: user.role }, { status: 200 });

    } catch (error) {
        console.error("❌ Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
    }
}


app->login->page.jsx

// Updated Login Page
"use client";

import { useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword, googleProvider, signInWithPopup } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();
    const { user, role, setUser, setRole } = useAuth();

    useEffect(() => {
        if (user && role) {
            console.log(`🔹 Redirecting to ${role} page`);
            const redirectTo = role === "admin" ? "/admin" : role === "subadmin" ? "/subadmin" : "/user";
            router.push(redirectTo);
        }
    }, [user, role, router]);

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const loggedUser = userCredential.user;
            console.log("🔹 Logged in user:", loggedUser.email);

            const response = await fetch(`/api/users?email=${loggedUser.email}`);
            const userData = await response.json();

            if (userData?.role) {
                console.log(`✅ Role after login: ${userData.role}`);
                setUser(loggedUser);
                setRole(userData.role);
                const redirectTo = userData.role === "admin" ? "/admin" : userData.role === "subadmin" ? "/subadmin" : "/user";
                router.push(redirectTo);
            } else {
                setErrorMessage("Role not found. Please contact support.");
            }
        } catch (error) {
            console.error("❌ Login error:", error);
            setErrorMessage(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const googleUser = result.user;
            console.log("🔹 Google login user:", googleUser.email);

            const response = await fetch(`/api/users?email=${googleUser.email}`);
            const userData = await response.json();

            if (userData?.role) {
                setUser(googleUser);
                setRole(userData.role);
                const redirectTo = userData.role === "admin" ? "/admin" : userData.role === "subadmin" ? "/subadmin" : "/user";
                router.push(redirectTo);
            } else {
                setErrorMessage("Google login is only available for registered users.");
            }
        } catch (error) {
            console.error("❌ Google Login Error:", error);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
                {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg transition duration-300">Login</button>
                <button onClick={handleGoogleLogin} className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded text-lg mt-4 transition duration-300">Login with Google</button>
            </div>
        </div>
    );
}


app->register->page.jsx
// admission-management/src/app/register/page.js
"use client";

import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [institute, setInstitute] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Call API to store user in MongoDB
            await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ uid: user.uid, userName, email, contact, institute }),
            });

            router.push("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-500 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h1>
                <input type="text" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Contact" onChange={(e) => setContact(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <select onChange={(e) => setInstitute(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500">
                    <option value="">Select Institute</option>
                    <option value="Islamic Da'wa Academy">Islamic Da'wa Academy</option>
                    <option value="Daiya Islamic Academy for Women">Daiya Islamic Academy for Women</option>
                    <option value="Hifzul Quran College">Hifzul Quran College</option>
                </select>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 border rounded focus:ring-2 focus:ring-green-500" />
                <button onClick={handleRegister} className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded text-lg transition duration-300">Register</button>
            </div>
        </div>
    );
}


app->subadmin->page.jsx
// admission-management/src/app/subadmin/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function SubAdminPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return; // Wait until loading completes

        if (!user || role !== "subadmin") {
            router.push("/login");
        }
    }, [user, role, loading]);

    if (loading || !user || role !== "subadmin") {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome Sub-Admin</h1>
        </div>
    );
}



app->subadmin->profile->page.jsx

// admission-management/src/app/subadmin/profile/page.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function SubAdminProfile() {
    const { user, role } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || role !== "subadmin") {
            router.push("/login");
        }
    }, [user, role]);

    if (!user) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">Subadmin Profile</h1>
            <p className="mt-4">Email: {user.email}</p>
            <LogoutButton />
        </div>
    );
}


app->user-page.jsx
// admission-management/src/app/user/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function UserPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return; // Wait until loading completes

        if (!user || role !== "user") {
            router.push("/login");
        }
    }, [user, role, loading]);

    if (loading || !user || role !== "user") {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome User</h1>
        </div>
    );
}



src->app->user->profile->page.jsx

// admission-management/src/app/user/profile/page.js
"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function UserProfile() {
    const { user, role } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user || role !== "user") {
            router.push("/login");
        }
    }, [user, role]);

    if (!user) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="mt-4">Email: {user.email}</p>
            <LogoutButton />
        </div>
    );
}




src->components->AdminDashboard.js
// admission-management/src/components/AdminDashboard.js
export default function AdminDashboard() {
    return <div>Admin Dashboard - Manage admissions and users</div>;
}




src->components->LogoutButton.js
// admission-management/src/components/LogoutButton.js
"use client";

import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; // Clear session cookie
            router.push("/login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
        </button>
    );
}


src->components->Navbar.js
// admission-management/src/components/Navbar.js
export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">Admission Management System</nav>
    );
}

src->components->Sidebar.js
"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
    const { role, loading } = useAuth() || {};
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Ensure sidebar is visible when role is loaded
    useEffect(() => {
        if (!loading && role) {
            setIsVisible(true);
        }
    }, [loading, role]);

    // Close sidebar when clicking outside on small screens
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && !event.target.closest("#sidebar") && !event.target.closest("#sidebar-toggle")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [isOpen]);

    // Sidebar Links Configuration
    const sidebarLinks = {
        admin: [
            { section: "Home", links: [{ name: "Dashboard", path: "/admin" }, { name: "Users/Others", path: "/admin/users" }] },
            { section: "Institute", links: [{ name: "Institutes", path: "/admin/institutes" }] },
            { section: "Student", links: [{ name: "Applications", path: "/admin/applications" }, { name: "Students", path: "/admin/students" }, { name: "Admit Card", path: "/admin/admitcard" }] },
            { section: "Notify Student", links: [{ name: "Notify Students", path: "/admin/notify-students" }, { name: "Notification Template", path: "/admin/notification-template" }] },
            { section: "Profile", links: [{ name: "Profile", path: "/admin/profile" }] },
        ],
        subadmin: [
            { section: "Profile", links: [{ name: "Profile", path: "/subadmin/profile" }] },
        ],
        user: [
            { section: "Profile", links: [{ name: "Profile", path: "/user/profile" }] },
        ]
    };

    return (
        <>
            {/* Toggle Button for Small Screens */}
            <button
                id="sidebar-toggle"
                className="md:hidden p-3 fixed top-4 left-4 bg-gray-800 text-white rounded-lg z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar - Always Visible on Desktop, Toggle on Mobile */}
            <AnimatePresence>
                {isVisible && role && (
                    <motion.aside
                        id="sidebar"
                        className={`w-64 bg-gray-900 text-white p-4 min-h-screen fixed top-0 left-0 md:relative transition-transform duration-300 ease-in-out z-40 ${
                            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                        }`}
                        initial={{ x: -300 }}
                        animate={{ x: isOpen || !loading ? 0 : -300 }}
                        exit={{ x: -300 }}
                    >
                        {/* Close Button for Mobile */}
                        <button className="md:hidden text-white absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </button>

                        <ul>
                            {sidebarLinks[role]?.map((section) => (
                                <li key={section.section} className="mb-4">
                                    <h2 className="text-lg font-semibold mb-2">{section.section}</h2>
                                    <ul>
                                        {section.links.map((link) => (
                                            <li key={link.path} className="mb-2">
                                                <Link
                                                    href={link.path}
                                                    className="block p-2 hover:bg-gray-700 rounded"
                                                    onClick={() => setIsOpen(false)} // Close sidebar on click
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}



src->components->SubadminDashboard.js
// admission-management/src/components/SubadminDashboard.js
export default function SubadminDashboard() {
    return <div>Subadmin Dashboard - Limited control</div>;
}





src->components->UserDashboard.js



// admission-management/src/components/UserDashboard.js
export default function UserDashboard() {
    return <div>User Dashboard - View admission status</div>;
}

src->context->AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                try {
                    console.log("🔹 Authenticated User:", authUser.email);

                    // Fetch user role from MongoDB
                    const res = await fetch(`/api/users?email=${authUser.email}`);
                    const data = await res.json();

                    if (data?.role) {
                        console.log(`✅ Role set for ${authUser.email}: ${data.role}`);
                        setUser(authUser);
                        setRole(data.role);
                    } else {
                        console.log(`❌ No role found for ${authUser.email}`);
                        setUser(authUser);
                        setRole("user");
                    }
                } catch (error) {
                    console.error("❌ Error fetching user role:", error);
                    setUser(null);
                    setRole(null);
                }
            } else {
                console.log("❌ User signed out");
                setUser(null);
                setRole(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, role, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

src->lib->admissionModel.js

import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  motherName: String,
  guardianName: String,
  relation: String,
  address: String,
  dob: Date,
  phone: String,
  whatsapp: String,
  aadhaar: String,
  tc: String,
  pupilPhoto: String,
  signature: String,
  studiedBefore: String,
  prevInstitute: String,
  studyYears: Number,
  lastMadrassaClass: String,
  lastSchoolClass: String
});

const Admission = mongoose.models.Admission || mongoose.model('Admission', admissionSchema);

export default Admission;



src->lib->firebase.js

import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Google Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore Database
const db = getFirestore(app);

export { auth, db, googleProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut };



src->lib->mongodb.js
// admission-management/src/lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;





src->middleware->authMiddleware.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const authToken = req.cookies.get("authToken"); // Firebase session cookie

    if (!authToken && ["/login", "/register"].includes(pathname)) {
        return NextResponse.next();
    }

    if (!authToken) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const client = await clientPromise;
        const db = client.db("admission_management");

        // Fetch user by Firebase UID
        const user = await db.collection("users").findOne({ uid: authToken });

        if (!user) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        // Role-based access control
        if (pathname.startsWith("/admin") && user.role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        if (pathname.startsWith("/subadmin") && user.role !== "subadmin") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        if (pathname.startsWith("/user") && user.role !== "user") {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware Error:", error);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/admin/:path*", "/subadmin/:path*", "/user/:path*"],
};


src->styles->globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;



/tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};


/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
        malayalam: ["Anek Malayalam", "sans-serif"],
      },
    },
  },
  plugins: [],
};


/postcss.config.mjs

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;


/postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

/package.json
{
  "name": "dawa-academy",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@fontsource/anek-malayalam": "^5.1.1",
    "@fontsource/poppins": "^5.1.1",
    "@fortawesome/free-brands-svg-icons": "^6.7.2",
    "@fortawesome/free-solid-svg-icons": "^6.7.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@heroicons/react": "^2.2.0",
    "firebase": "^11.3.1",
    "framer-motion": "^12.4.2",
    "lucide-react": "^0.475.0",
    "mongodb": "^6.13.0",
    "mongoose": "^8.10.0",
    "next": "15.1.7",
    "next-auth": "^4.24.11",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9",
    "eslint-config-next": "15.1.7",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17"
  }
}


/next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


/eslint.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;



/jsconfig.json

{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}









