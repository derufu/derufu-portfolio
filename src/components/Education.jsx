import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold">Davao del Norte State College, Panabo</h3>
        <p className="text-[#6B7280]">MIT, Information Technology | Jun 2022 – Jun 2025</p>
        <ul className="list-disc ml-5 text-[#6B7280]">
          <li>
            Developed the Web-based Assistance Issuance with Expense and Supply Forecasting for Davao City Vice Mayor’s Office as part of the research and capstone project
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">STI College</h3>
        <p className="text-[#6B7280]">Bachelor's degree, Information Technology | 2014 – 2019</p>
        <ul className="list-disc ml-5 text-[#6B7280]">
          <li>
            Developed a cross-platform mobile ordering application targeting local government vendors, similar to Food Panda or Grab, in 2019
          </li>
        </ul>
      </div>
    </section>
  );
}
