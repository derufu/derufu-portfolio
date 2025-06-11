import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-[#6B7280]">Let’s connect! You can reach me via LinkedIn below.</p>
      <a href="https://www.linkedin.com/in/delfcarlboston" target="_blank" rel="noopener noreferrer"
         className="mt-4 inline-block bg-[#00E5C2] text-black px-6 py-3 rounded-full shadow hover:bg-teal-400 transition">
        Visit LinkedIn
      </a>
    </section>
  );
}
