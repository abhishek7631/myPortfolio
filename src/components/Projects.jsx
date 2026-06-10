import React, { useMemo, useRef, useState } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiExternalLink, FiSearch, FiFilter, FiFolder } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import ProjectCard from "./common/ProjectCard";
import ProjectGalleryCarousel from "./common/ProjectGalleryCarousel";
import { projectAsset } from "../utils/projectAssets";

const projectData = [
  {
    id: 1,
    name: "User Management System",
    projectType: "Company Project",
    subtitle: "Role-Based CRM & Admin Platform",
    shortDescription:
      "Developed a role-based CRM and admin management platform for multiple logistics departments using React.js. Implemented authentication, protected routes, dynamic dashboards, reusable table components, filtering, and pagination features.",
    fullDescription:
      "Developed a role-based CRM and admin management platform for multiple logistics departments using React.js. Implemented authentication, protected routes, dynamic dashboards, reusable table components, filtering, and pagination features. Integrated RESTful APIs for managing operational data and improving workflow efficiency.",
    tech: ["React.js", "Redux", "REST APIs", "Axios", "JavaScript", "CSS"],
    liveLink: "https://vpower-logistics.com/",
    isLive: true,
    image: projectAsset("user-management-1.png"),
    gallery: [
      projectAsset("user-management-1.png"),
      projectAsset("user-management-2.png"),
      projectAsset("user-management-3.png"),
      projectAsset("user-management-4.png"),
    ],
    thumbnail: "from-sky-600 via-blue-600 to-indigo-700",
  },
  {
    id: 2,
    name: "Trucker/Shipper Platform",
    projectType: "Company Project",
    subtitle: "Logistics Marketplace",
    shortDescription:
      "Built a logistics marketplace platform connecting truckers and shippers with real-time operational workflows. Developed responsive UI components, shipment management features, search/filter functionality, and API integrations.",
    fullDescription:
      "Built a logistics marketplace platform connecting truckers and shippers with real-time operational workflows. Developed responsive UI components, shipment management features, search/filter functionality, and API integrations. Implemented centralized state management and optimized data rendering for better application performance.",
    tech: ["React.js", "Redux", "REST APIs", "JavaScript", "Axios"],
    liveLink: "https://vplroad.com/",
    isLive: true,
    image: projectAsset("trucker-shipper-1.png"),
    gallery: [
      projectAsset("trucker-shipper-1.png"),
      projectAsset("trucker-shipper-2.png"),
      projectAsset("trucker-shipper-3.png"),
      projectAsset("trucker-shipper-4.png"),
    ],
    thumbnail: "from-violet-600 via-purple-600 to-fuchsia-700",
  },
  {
    id: 3,
    name: "Ocean Shipment Platform",
    projectType: "Company Project",
    subtitle: "Ocean Freight Management",
    shortDescription:
      "Developed a scalable ocean freight management platform for shipment booking, rate management, and operational workflow handling. Implemented REST API integrations, dynamic state management, and reusable UI components.",
    fullDescription:
      "Developed a scalable ocean freight management platform for shipment booking, rate management, and operational workflow handling. Implemented REST API integrations, dynamic state management, reusable UI components, and responsive frontend architecture to streamline logistics operations and enhance system performance.",
    tech: ["React.js", "Redux", "REST APIs", "JavaScript", "CSS"],
    liveLink: "https://vplocean.com/",
    isLive: true,
    image: projectAsset("ocean-shipment-1.png"),
    gallery: [
      projectAsset("ocean-shipment-1.png"),
      projectAsset("ocean-shipment-2.png"),
      projectAsset("ocean-shipment-3.png"),
      projectAsset("ocean-shipment-4.png"),
    ],
    thumbnail: "from-cyan-500 via-teal-500 to-blue-600",
  },
  {
    id: 4,
    name: "Full-Stack E-Commerce Web Application",
    projectType: "MERN Stack",
    subtitle: "E-Commerce Platform",
    shortDescription:
      "Built a scalable e-commerce platform using MongoDB, Express.js, React.js, and Node.js. Implemented JWT-based authentication, product and category CRUD, cart functionality, order management, and PayPal payment integration.",
    fullDescription:
      "Built a scalable e-commerce platform using MongoDB, Express.js, React.js, and Node.js. Implemented JWT-based authentication along with product and category CRUD operations, cart functionality, order management and role-based access control. Integrated the PayPal payment gateway to enable secure online transactions through RESTful APIs.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "PayPal",
      "REST APIs",
    ],
    liveLink: "https://e-com-mern-frontend.onrender.com/",
    isLive: true,
    image: projectAsset("ecommerce-1.png"),
    gallery: [
      projectAsset("ecommerce-1.png"),
      projectAsset("ecommerce-2.png"),
      projectAsset("ecommerce-3.png"),
      projectAsset("ecommerce-4.png"),
    ],
    thumbnail: "from-emerald-500 via-green-500 to-teal-600",
  },
];

function getProjectImages(project) {
  const images = project.gallery?.length
    ? project.gallery
    : project.image
      ? [project.image]
      : [];
  return images.filter(Boolean);
}

function Projects() {
  const ref = useRef();
  const visible = useOnScreen(ref);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [techFilter, setTechFilter] = useState("all");

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projectData.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projectData.filter((project) => {
      const matchesTech =
        techFilter === "all" || project.tech.includes(techFilter);

      if (!query) return matchesTech;

      const searchable = [
        project.name,
        project.projectType,
        project.subtitle,
        project.shortDescription,
        project.fullDescription,
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();

      return matchesTech && searchable.includes(query);
    });
  }, [searchQuery, techFilter]);

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-600/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wide uppercase mb-5">
            <HiSparkles size={14} />
            Selected Work
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Production-ready builds across logistics, CRM systems, shipment
            platforms, and e-commerce — each crafted for clarity, performance,
            and real users.
          </p>

          <div className="mt-5 inline-flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <FiFolder className="text-sky-500" />
              {projectData.length} projects
            </span>
            <span className="w-px h-4 bg-gray-300 dark:bg-slate-600" />
            <span>Filter by stack or search</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <div className="relative flex-1">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, description, or keyword..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition"
            />
          </div>

          <div className="relative sm:w-56">
            <FiFilter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
            <select
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full appearance-none pl-11 pr-10 py-3.5 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition cursor-pointer"
            >
              <option value="all">All technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
              ▼
            </span>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-16">
            No projects match your search. Try a different keyword or filter.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/90 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
                aria-label="Close"
              >
                <IoClose size={22} />
              </button>

              <div className="rounded-t-2xl overflow-hidden">
                {getProjectImages(selectedProject).length > 0 ? (
                  <ProjectGalleryCarousel
                    images={getProjectImages(selectedProject)}
                    projectName={selectedProject.name}
                  />
                ) : (
                  <div
                    className={`h-48 sm:h-56 bg-gradient-to-br ${selectedProject.thumbnail}`}
                  />
                )}
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {selectedProject.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ({selectedProject.projectType})
                </p>
                <p className="text-sky-600 dark:text-sky-400 font-medium mt-1">
                  {selectedProject.subtitle}
                </p>

                <p className="mt-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <a
                    href={selectedProject.liveLink}
                    target={
                      selectedProject.liveLink !== "#" ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-colors"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Projects;
