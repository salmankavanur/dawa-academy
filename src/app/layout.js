import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
       <Head>
        <meta name="description" content="Islamic Dawa Academy - Quality Quranic and Islamic education" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Best Integrated Study Centre for Huffaz - Islamic Dawa Academy" />
        <meta property="og:description" content="Special Integrated Curriculum for Huffaz Students" />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.dawaacademy.in" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

