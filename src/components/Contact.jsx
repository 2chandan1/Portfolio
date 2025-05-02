import React from "react";

const Contact = () => {
  return (
    <div className="p-6 bg-base-200" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Contact Form */}
        <form
          className="bg-base-100 p-6 pb-4 rounded-lg shadow-md h-full flex flex-col justify-between"
          data-aos="zoom-in"
        >
          <div>
            <label className="floating-label w-full">
              <span>Your Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-md input-accent w-full"
                required
              />
            </label>
            <label className="floating-label mt-4">
              <span>Your Email</span>
              <input
                type="email"
                placeholder="mail@site.com"
                className="input input-md input-accent w-full"
                required
              />
            </label>

            <label className="floating-label mt-4">
              <span>Message</span>
              <textarea
                className="textarea textarea-accent w-full"
                placeholder="Message"
              ></textarea>
            </label>
          </div>

          <button className="btn btn-primary w-full mt-4">Send Message</button>
        </form>

        {/* Contact Info Card */}
        <div
          className="bg-base-100 p-4 rounded-lg shadow-md h-full flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <span className="badge badge-soft badge-accent my-1">
            <div aria-label="warning" className="status status-warning"></div>
                Available For Work
            </span>

            <div className="mt-4">
              <h2 className="text-3xl font-bold py-2">Contact Information</h2>
              <p className="text-sm text-gray-300">
                I’m always open to new opportunities and collaborations. Feel
                free to reach out if you're looking for a dedicated full-stack
                developer to bring your projects to life. Let’s connect! 👋
              </p>
            </div>

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

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-black transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-600 hover:text-blue-800 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:tiwarichandan637@gmail.com"
              className="text-xl text-red-500 hover:text-red-700 transition"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
