import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// === PROJECT DATA ===
const currentCompanyProjects = [
{
  title: "Bakuun – Product-Based Travel Tech Platform",
    description: `At Bakuun, I work as a Full Stack Developer on the Marketplace, B-Aggregate , B-Integrate and Admin Panel. 
I build and optimize features for the unified travel distribution platform that connects hotels and travel providers globally. 
My contributions include integrating scalable APIs, automating booking flows, and enhancing the Extranet dashboard with secure, real-time data management.`,
    Front_tech: ["Vue.js", "React.js", "Tailwind CSS"],
    Back_tech: ["Laravel", "Node.js"],
    Database: ["MongoDB", "MySQL"],
    link: "https://bakuun.com/",
}
];

const previousCompanyProjects = [
    {
    title: "NGO - Internal Displacement Monitoring Centre",
    description: `Revamped IDMC’s web platform using React and GatsbyJS. Improved page load speed by 35% and SEO performance by 20%.`,
    Front_tech: ["React.js", "GatsbyJS", "TypeScript", "Drupal CMS"],
    Back_tech: ["Node.js"],
    Database: ["GraphQL"],
    link: "https://www.internal-displacement.org/",
  },
  {
    title: "Global Hiring - Safeguard Global",
    description: `Built reusable Gatsby templates and improved SEO, increasing organic traffic by 40%. Integrated GTM and Google Analytics for data insights.`,
    Front_tech: ["React.js", "GatsbyJS", "TypeScript"],
    Back_tech: ["Node.js"],
    Database: ["GraphQL"],
    link: "https://safeguardglobal.com/",
  },
  {
    title: "INVOPORT",
    description: `Developed a PHP-based e-commerce website with integrations including DocuSign, Microsoft Online, Open Bank, and Google Cloud Document AI.`,
    Front_tech: [
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Vue.js",
    ],
    Back_tech: ["PHP", "Laravel"],
    Database: ["MySQL"],
    link: "https://invoport.com/",
  },
  {
    title: "Mango Semiconductors",
    description: `Developed a full-stack e-commerce platform using Laravel. Integrated multiple payment gateways (PayPal, Stripe, Razorpay) and optimized backend APIs.`,
    Front_tech: ["Vue.js", "Bootstrap", "JavaScript"],
    Back_tech: ["Laravel"],
    Database: ["MySQL"],
    link: "https://www.mangofy.in/",
  },
  {
    title: "Rapisurv",
    description: `Built backend services for a Laravel-based construction bidding platform. Focused on tender management APIs and data automation.`,
    Back_tech: ["Laravel"],
    Database: ["MySQL"],
    link: "https://www.rapisurv.com/",
  },
  {
    title: "RAH (Rimple and Harpreet)",
    description: `Developed a high-end fashion e-commerce site on Shopify with authentication, live sales, and franchise management via CSV imports.`,
    Front_tech: ["HTML", "CSS", "Shopify", "Bootstrap"],
    Back_tech: ["Liquid", "Shopify API"],
    link: "https://www.rimpleandharpreet.com/",
  },
  {
    title: "HRMS - Human Resource Management System",
    description: `Designed and implemented the Finance module with salary management, tax calculations, and reimbursement tracking. Built using React and Node.`,
    Front_tech: ["React.js", "Next.js", "GatsbyJS", "TypeScript"],
    Back_tech: ["Node.js"],
    Database: ["GraphQL"],
    link: "",
  },
  {
    title: "McareExports",
    description: `Enhanced a WordPress-based pharmaceutical website with new features and bug fixes to improve overall functionality.`,
    Front_tech: ["PHP", "WordPress", "Bootstrap"],
    Back_tech: ["WooCommerce"],
    Database: ["MySQL"],
    link: "https://mcareexports.com/",
  },
];

const personalProjects = [
  
];

// === PROJECT CARD COMPONENT ===
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech */}
      {project.Front_tech?.length > 0 && (
        <div className="mb-2">
          <h4 className="text-xs uppercase text-gray-400 mb-2 font-medium">
            Frontend
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.Front_tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.Back_tech?.length > 0 && (
        <div className="mb-2">
          <h4 className="text-xs uppercase text-gray-400 mb-2 font-medium">
            Backend
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.Back_tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/20 text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.Database?.length > 0 && (
        <div>
          <h4 className="text-xs uppercase text-gray-400 mb-2 font-medium">
            Database
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.Database.map((db, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-info/10 border border-info/20 text-info"
              >
                {db}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

// === MAIN SECTION ===
const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-base-200 via-base-100 to-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Projects & Work Experience
        </h2>

        {/* 1️⃣ Current Company */}
        <Section title="Bakuun" projects={currentCompanyProjects} />

        {/* 2️⃣ Previous Company */}
        <Section
          title="Cloud Analogy"
          projects={previousCompanyProjects}
        />

        {/* 3️⃣ Personal Projects */}
        {/* <Section title="Personal & Freelance Projects" projects={personalProjects} /> */}
      </div>
    </div>
  );
};

// === SUB SECTION COMPONENT ===
const Section = ({ title, projects }) => (
  <div className="mb-16">
    <h3 className="text-3xl font-semibold mb-8 text-white">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
        {title}
      </span>
    </h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}
    </div>
  </div>
);

export default Projects;
