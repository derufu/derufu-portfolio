import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8">

        {/* City Government of Davao */}
        <div className="flex items-start gap-4">
          {/* Replace src with actual logo path */}
          <img src="/logos/davao-city.png" alt="City Government of Davao Logo" className="w-12 h-12 object-contain mt-1" />
          <div>
            <h3 className="text-xl font-bold">City Government of Davao</h3>
            <p className="text-[#6B7280]">IT Manager - Vice Mayor's Office (Contract)</p>
            <p className="text-[#6B7280]">Jul 2022 - Present · 3 yrs</p>
            <p className="text-[#6B7280]">3rd Floor, Sangguniang Panlungsod Building, San Pedro Street, Davao City</p>
          </div>
        </div>

        {/* City Government of Island Garden City of Samal */}
        <div className="flex items-start gap-4">
          {/* Replace src with actual logo path */}
          <img src="/logos/samal-city.png" alt="Island Garden City of Samal Logo" className="w-12 h-12 object-contain mt-1" />
          <div>
            <h3 className="text-xl font-bold">City Government of Island Garden City of Samal</h3>
            <p className="text-[#6B7280]">Web Developer - City Administrator's Office ICT Dept (Contract)</p>
            <p className="text-[#6B7280]">Feb 2019 - Jun 2022 · 3 yrs 5 mos</p>
            <p className="text-[#6B7280]">Penaplata, Samal District</p>
          </div>
        </div>

        {/* Department of Social Welfare and Development */}
        <div className="flex items-start gap-4">
          {/* Replace src with actual logo path */}
          <img src="/logos/dswd.png" alt="DSWD Logo" className="w-12 h-12 object-contain mt-1" />
          <div>
            <h3 className="text-xl font-bold">Department of Social Welfare and Development</h3>
            <p className="text-[#6B7280]">Web Developer Internship</p>
            <p className="text-[#6B7280]">Dec 2018 - Mar 2019 · 4 mos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
