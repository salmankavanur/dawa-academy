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

