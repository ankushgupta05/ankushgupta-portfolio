import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Contact from "@/app/contact/page.js"
import Project from "@/app/project/page.js"
import About from "@/app/about/page.js"
import Goal from "@/app/goal/page.js"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ankushgupta - Portfolio",
  description: "This is oficial portfolio and all about ankush gupta Devloper! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar  />


        <div id="home" className="container bg-black px-2 py-1  ">
          {children}
        </div>


        <div id="project" className="bg-black px-2 py-1" >
          <Project />
        </div>

        <div id="contact" className="bg-black px-2 py-1 " >
          <Contact />
        </div>


        <div id="about" className="bg-black px-2 py-1 " >
          <About />
        </div>

        <div id="achievement" className="bg-black px-2 py-1 " >
          <Goal />
        </div>

        <Footer />
      </body>

    </html>
  );
}
