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
          <div className="flex items-center">
            <Image src="/images/Logo.png" width={50} height={50} alt="Institute Logo" className="rounded-lg hover:scale-105 transition-transform" />
            <h1 className="ml-3 text-2xl font-bold font-['Poppins']">Islamic Dawa Academy</h1>
          </div>
          <div className="md:hidden flex items-center">
            <button id="menu-toggle" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul id="menu" className="hidden md:flex space-x-8 text-lg font-['Poppins']">
            <li><Link href="#about" className="hover:text-green-300 transition-colors">About</Link></li>
            <li><Link href="#features" className="hover:text-green-300 transition-colors">Features</Link></li>
            <li><Link href="#contact" className="hover:text-green-300 transition-colors">Contact</Link></li>
            <li><Link href="/admission" className="hover:text-green-300 transition-colors">Admission</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
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
          <h1 className="text-4xl sm:text-6xl font-bold font-malayalam mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            ഹാഫിളീങ്ങൾക്കായി
          </h1>
          <p className="text-xl sm:text-2xl font-malayalam mb-8">സ്പെഷ്യൽ ഇന്റഗ്രേറ്റഡ് സിലബസ്</p>
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
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            About Islamic Dawa Academy
          </h2>
          <p className="text-lg sm:text-xl text-white-300 font-['Poppins'] leading-relaxed">
            Islamic Dawa Academy provides high-quality Quranic and Islamic education
            with an integrated syllabus tailored for Huffaz students.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
              High-Quality Quranic Education
            </h3>
            <p className="text-white-300 font-['Poppins']">
              A special syllabus integrated with advanced memorization techniques and guidance for Huffaz students.
            </p>
          </div>
          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
              Experienced Teachers
            </h3>
            <p className="text-white-300 font-['Poppins']">
              Our teachers have years of experience in Quranic studies, making your learning journey smooth and effective.
            </p>
          </div>
          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Modern Learning Facilities
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Dawa Academy Provide Modern Learning Facilities for the students for their bright future such as Smart Class Room, Digital Studio & IT LAB, etc.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Quranic Research Study
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Advanced research in Quranic sciences and interpretation.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Special Doura Sessions
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Exclusive lectures and interactive learning sessions.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Integrated Dual Degree & P.G
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Earn dual academic and Islamic degrees together.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Multi-Linguistic Skills
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Develop fluency in multiple languages including Arabic and English.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Eco-Friendly Campus
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Green, sustainable environment for better learning.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Media Hub & I.T Lab
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Technology-driven learning with modern media tools.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Digital Library
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Access vast resources through an extensive digital library.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Skills Development
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Practical training to enhance student capabilities.
            </p>
          </div>

          <div className="group p-8 bg-green-700/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-4 group-hover:text-green-300 transition-colors">
            Creative Development
            </h3>
            <p className="text-white-300 font-['Poppins']">
            Encouraging creativity and critical thinking.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-5xl font-bold mb-16 text-center font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
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

          {/* Contact Form */}
          <div className="md:col-span-2 bg-green-700/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold font-['Poppins'] mb-6">Send Us a Message</h3>
            <form action="#" method="POST" className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="w-full py-3 px-6 rounded-lg bg-transparent border border-green-600/30 text-white placeholder-white-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                required
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="w-full py-3 px-6 rounded-lg bg-transparent border border-green-600/30 text-white placeholder-white-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none" 
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="w-full py-3 px-6 rounded-lg bg-transparent border border-green-600/30 text-white placeholder-white-400 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full sm:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-center py-8">
        <p className="text-lg font-['Poppins'] text-white">
          © 2025 Islamic Dawa Academy | All rights reserved
        </p>
      </footer>
    </div>
  );
}
