import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-base-200 px-6 md:px-12 lg:px-24 py-20"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2
          className="text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
        <p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Have a project, opportunity, or collaboration in mind?  
          Feel free to drop me a message — I’ll get back to you soon.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            className="bg-base-100 p-6 rounded-xl shadow-lg border border-gray-700/30 flex flex-col justify-between"
            data-aos="zoom-in"
          >
            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-md input-accent w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-md input-accent w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  className="textarea textarea-accent w-full h-32 resize-none"
                  placeholder="Let's collaborate..."
                  required
                ></textarea>
              </div>
            </div>

            <button className="btn btn-primary w-full mt-6">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div
            className="bg-base-100 p-8 rounded-xl shadow-lg border border-gray-700/30 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Availability */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="status status-success"></span>
                <span className="text-sm text-green-400 font-semibold">
                  Available for Work
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">Let’s Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I’m open to freelance projects, full-time opportunities, and
                collaborations. Reach out through any of the following platforms.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <a
                    href="mailto:tiwarichandan637@gmail.com"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <img src="/gmail.png" alt="Email" width="20" height="20" />
                    <span className="font-medium">
                      tiwarichandan637@gmail.com
                    </span>
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <a
                    href="tel:+919905880522"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <i className="fa-solid fa-phone text-lg text-green-500"></i>
                    <span className="font-medium">+91 99058 80522</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-5">
              <a
                href="https://github.com/2chandan1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/chandan-tiwari9905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-blue-500 hover:text-blue-400 transition"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="mailto:tiwarichandan637@gmail.com"
                className="text-2xl text-red-500 hover:text-red-400 transition"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
