import React, { useRef, useState } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
  const ref = useRef();
  const visible = useOnScreen(ref);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      name: "Wanderlust",
      subtitle: "Full-Stack Marketplace Application",
      shortDescription:
        "An Airbnb-like marketplace connecting property owners with travelers",
      fullDescription:
        "Wanderlust is a full-stack online marketplace, similar to Airbnb, that connects property owners with travelers seeking short-term accommodations. Developed using MongoDB, Node.js, Express, and EJS with MVC architecture for organized and scalable code. Features include user authentication, property listings, booking system, and review management.",
      tech: ["MongoDB", "Node.js", "Express.js", "EJS", "Tailwind CSS"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      name: "Movie Guide App",
      subtitle: "Movie Search Application",
      shortDescription:
        "Dynamic movie search with detailed information and images",
      fullDescription:
        "A responsive movie search application using HTML, CSS, and JavaScript. Features a dynamic search bar for querying movie details and rendering relevant information with images on the results page. Includes filtering options, ratings display, and movie recommendations based on user preferences.",
      tech: ["HTML", "CSS", "JavaScript", "Movie API"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      name: "Recipe App",
      subtitle: "Interactive Recipe Search",
      shortDescription:
        "Search recipes with ingredients and cooking instructions",
      fullDescription:
        "An interactive recipe search app using HTML, CSS, and JavaScript. Users can search for recipes and view details such as ingredients and instructions, with individual recipe cards revealing more details when clicked. Features include filtering by cuisine type, difficulty level, and cooking time estimates.",
      tech: ["HTML", "CSS", "JavaScript", "Recipe API"],
      liveLink: "#",
      repoLink: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950 dark:from-slate-950 dark:via-purple-900/30 dark:to-slate-950 relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {projectData.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onClick={() => setSelectedProject(p)}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card content */}
                <motion.div
                  className="relative p-6 bg-slate-900/50 dark:bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 dark:border-purple-600/40 rounded-xl h-full flex flex-col justify-between group-hover:border-purple-400/60 transition-all duration-300"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-purple-300 dark:text-purple-200 mb-1">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300 mb-3">
                      {p.subtitle}
                    </p>
                    <p className="text-gray-300 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {p.shortDescription}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-300 dark:text-purple-200 border border-purple-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View details button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-950 dark:to-slate-900 rounded-2xl border border-purple-500/30 dark:border-purple-600/40 p-8 relative"
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg text-purple-300 transition-all"
              >
                <IoClose size={24} />
              </motion.button>

              {/* Modal content */}
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                  {selectedProject.name}
                </h2>
                <p className="text-purple-300 dark:text-purple-200 text-lg mb-6">
                  {selectedProject.subtitle}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-50 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-50 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 dark:text-purple-200 border border-purple-500/30 text-sm font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-6 border-t border-purple-500/20">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg transition-all"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.repoLink}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
                  >
                    <FiGithub size={18} />
                    Repository
                  </motion.a>
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
