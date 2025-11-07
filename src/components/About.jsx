import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Bakuun Tech Pvt. Ltd.",
    companyUrl: "https://bakuun.com",
    duration: "Jul 2025 – Present",
  },
  {
    role: "Full Stack Developer",
    company: "Cloud Analogy, Noida",
    companyUrl: "https://www.cloudanalogy.com/",
    duration: "Jan 2022 – Jun 2025",
  },
];

const highlights = [
  "Specialized in PHP frameworks (Laravel, CodeIgniter, WordPress) and JavaScript ecosystems (React.js, Vue.js, Shopify).",
  "Led the design and development of scalable, high-performance web applications tailored to business needs.",
  "Integrated APIs such as DocuSign, Google Cloud Document AI, Microsoft Azure, PayPal, Stripe, Razorpay, Open Bank, and Revolut.",
  "Built secure backend systems with efficient data models and seamless API communication.",
  "Customized Shopify stores and integrated third-party solutions to enhance e-commerce experiences.",
  "Adopted emerging technologies and best practices to drive innovation and maintain code quality.",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-100 px-6 md:px-12 lg:px-24 py-20 text-gray-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
        >
          About Me
        </h2>

        {/* Summary */}
        <p
          className="text-lg leading-relaxed text-center text-gray-300 max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I’m a passionate <strong>Full Stack Developer</strong> with expertise in
          modern web technologies, dedicated to building efficient, scalable, and
          user-friendly applications. I combine technical precision with creative
          problem-solving to deliver impactful digital solutions.
        </p>

        {/* Experience Section */}
        <div className="space-y-6 mb-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-xl p-6 hover:shadow-lg transition duration-300 bg-base-200/30"
              data-aos="fade-up"
              data-aos-delay={150 + i * 150}
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-medium"
              >
                {exp.company}
              </a>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-semibold mb-4 text-center text-white">
            Key Highlights
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <li
                key={i}
                data-aos="fade-right"
                data-aos-delay={450 + i * 80}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
