import React from "react";
import { motion } from "framer-motion";
import { Code, Briefcase } from "lucide-react";

const skills = [
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
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cloud Analogy",
    duration: "Jan 2022 – Jun 2025",
    details: [
      "Built full-stack apps using Laravel and React.js.",
      "Integrated APIs like DocuSign, Stripe, Revolut, etc.",
      "Developed scalable Shopify customizations and themes.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Bakuun",
    duration: "Jul 2025 – Present",
    details: [
      "Working on Bakuun’s core product ecosystem using Laravel, Vue.js, and MongoDB.",
      "Implementing RESTful APIs and real-time components to enhance platform scalability.",
      "Collaborating with cross-functional teams to optimize product performance and UX.",
    ],
  },
];

const SkilsAndExperience = () => {
  return (
    <div className="bg-gradient-to-b from-base-200 via-base-100 to-base-200 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12" data-aos="fade-up">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-md">
            My Skills & Experience
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            A blend of design, logic, and code — crafting full-stack experiences that matter.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-sm font-medium text-white rounded-full border border-white/10 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-accent w-6 h-6" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>

            <div className="space-y-8 mt-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative border-l-2 border-primary/50 pl-5"
                >
                  <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary"></span>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-sm text-gray-400">
                    {exp.company} – {exp.duration}
                  </p>
                  <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkilsAndExperience;
