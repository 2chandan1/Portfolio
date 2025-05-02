import React from "react";

const SkilsAndExperience = () => {
  return (
    <div className="bg-base-200 py-5">
      <div className="max-w-4xl mx-auto px-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-center mt-16">
          My Skills & Experience
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 bg-base-200 rounded-lg shadow-md"
            data-aos="zoom-in"
          >
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "JavaScript",
                "React.js",
                "Vue.js",
                "Next.js",
                "HTML",
                "CSS",
                "Bootstrap",
                "Tailwind CSS",
                "Material UI",
                "CodeIgniter",
                "Node.js",
                "TypeScript",
                "PHP",
                "Laravel",
                "Shopify",
                "DaisyUI",
                "WordPress",
                "Firebase",
                "MySQL",
                "Git",
                "MongoDB",
                "Postman",
                "Figma",
                "API Integration",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="badge badge-soft badge-success  m-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-6 bg-base-200 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div>
              <h4 className="font-bold">Full Stack Developer</h4>
              <p className="text-sm text-gray-300 py-2">
                Cloud Analogy – Jan 2022 to Present
              </p>
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                {[
                  "Built full-stack apps using Laravel and React.js.",
                  "Integrated APIs like DocuSign, Stripe, Revolut, etc.",
                  "Developed scalable Shopify customizations and themes.",
                ].map((item, index) => (
                  <li
                    key={index}
                    data-aos="zoom-in-left"
                    data-aos-delay={300 + index * 100}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkilsAndExperience;
