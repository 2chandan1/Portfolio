import React from "react";

const projects = [
  {
    title: "INVOPORT",
    description: `Developed an e-commerce website using core PHP with extensive API integrations including DocuSign,
          Microsoft Online, Open Bank, and Google Cloud Document AI. Handled both front-end and back-end
          development, ensuring smooth user experiences.`,
    Front_tech: [
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Ajax",
      "Vue js",
    ],
    Back_tech: ["PHP", "LARAVEL"],
    Database: ["MySQL"],
    link: "https://inv-oport.com",
  },
  {
    title: "Mango Semiconductors",
    description:
      `Developed a full-stack e-commerce platform using Laravel, handling both front-end and back-end.
Integrated PayPal, Stripe, Razorpay, and 6 e-commerce APIs for seamless payment and order
processing. Implemented user login, registration, and account management features.
Pioneered the development of a comprehensive website`,
    Front_tech: [
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Ajax",
      "Vue js",
    ],
    Back_tech: ["PHP", "LARAVEL"],
    Database: ["MySQL"],
    link: "https://yourcrm.com",
  },
  {
    title: "Rapisurv",
    description:
     `Developed the back-end of a Laravel-based e-commerce platform for construction services, focusing on
tender and bidding functionality. Worked on bug fixes and data uploading, ensuring smooth operations.
● Created APIs (CRUD) for managing tenders, bidders, and invitations.`,
    Front_tech: [],
    Back_tech: [
      "PHP",
     "LARAVEL",
    ],
    Database: ["MySQL"],
    link: "https://yourportfolio.com",
  },
  {
    title: "PRIME BPM",
    description:
     `Worked as a Laravel backend developer, focusing on API integration and creation for the website.
Optimized both code and APIs to ensure performance and scalability, adhering to industry standards.`,
    Front_tech: [],
    Back_tech: [
      "PHP",
        "LARAVEL",
    ],
    Database: ["SQL LITE"],
    link: "https://yourportfolio.com",
  },
  {
    title: "RAH (Rimple and Harpreet)",
    description:
      `Developed an e-commerce fashion website using Shopify, focusing on user login, authentication, and live sales functionality. Implemented features for appointment booking and CSV file import for
franchise management.`,
    Front_tech: [ "HTML","CSS","Javascript","Shopify", "Bootstrap"],
    Back_tech: [
      "PHP",
      "Shopify",
     "Liquid",
      "Shopify API",
    ],
    link: "https://yourportfolio.com",
  },
  {
    title: "McareExports",
    description:
      `Worked on a WordPress-based pharmaceutical website, focusing on bug fixes and adding new features
        to enhance functionality.`,
    Front_tech: ["PHP","WordPress", "HTML","CSS","Javascript","Shopify", "Bootstrap"],
    Back_tech: [
      "PHP",
       "Woocommerce", "wordpress",
    ],
    Database: ["MySQL"],
    link: "https://yourportfolio.com",
  },
];

const Projects = () => {
  return (
    <div className="px-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300 "
            data-aos="zoom-in"
            data-aos-delay={index * 50}
          >
            <div className="card-body space-y-4">
              <h3 className="card-title text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="font-medium text-sm text-gray-400 mb-3">
                  Front-end Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.Front_tech.map((tech, i) => (
                    <span
                      key={i}
                      className="badge badge-warning badge-outline text-sm px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-400 mb-3">
                  Back-end Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.Back_tech.map((tech, i) => (
                    <span
                      key={i}
                      className="badge badge-secondary badge-outline text-sm px-3 py-1 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.Database?.length > 0 && (
                <div>
                  <h4 className="font-medium text-sm text-gray-400 mb-1">
                    Database:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.Database.map((db, i) => (
                      <span
                        key={i}
                        className="badge badge-info badge-outline text-sm px-3 py-1"
                      >
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-actions justify-end mt-6">
                <a
                  href={project.link}
                  className="btn btn-sm btn-primary rounded-full px-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
