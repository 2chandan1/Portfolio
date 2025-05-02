import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-base-100 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">
          About Me
        </h2>

        <p
          className="text-lg text-gray-300 mb-6 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Full Stack Developer | Jan 2022 - Present <br />
          <strong>Cloud Analogy, Noida</strong>
        </p>

        <p
          className="text-gray-300 leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Proven IT professional with expertise in PHP, Laravel, CodeIgniter,
          WordPress, Shopify, JavaScript, React.js, and Vue.js. Recognized for
          delivering innovative and tailored web solutions and leading multiple
          projects to drive business-focused results.
        </p>

        <ul className="list-disc pl-5 space-y-3 text-gray-300">
          {[
            "Specialized in PHP frameworks (WordPress, CodeIgniter), Laravel, Shopify, and Vue.js, consistently delivering client-centered solutions.",
            "Led the development of dynamic and scalable web applications with diverse tech stacks to meet business requirements.",
            "Integrated APIs like DocuSign, Google Cloud Document AI, Microsoft Azure, PayPal, Stripe, Razorpay, Open Bank, Revolut, and developed custom APIs in Laravel and PHP.",
            "Built high-performance backend systems ensuring secure data management and seamless API integration.",
            "Customized Shopify stores and integrated third-party apps to enhance e-commerce functionality.",
            "Embraced emerging tech trends to improve product outcomes and foster team collaboration.",
            "Continuously upskilling to stay aligned with modern development practices and frameworks.",
          ].map((item, index) => (
            <li
              key={index}
              data-aos="fade-right"
              data-aos-delay={300 + index * 100}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      
    </section>
  );
};

export default About;
