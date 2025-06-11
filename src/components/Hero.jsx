import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">Delf Carl Boston</h1>
      <p className="mt-4 text-xl text-[#6B7280]">Public Servant | Designer | Developer</p>
      <a href="#contact" className="mt-6 bg-[#4A3AFF] text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
        Contact Me
      </a>
    </section>
  );
}
