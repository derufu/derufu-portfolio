import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="bg-[#FDFDFD] text-[#1A1A1A]">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
