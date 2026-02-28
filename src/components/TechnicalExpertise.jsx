import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiVisualstudiocode,
  SiTailwindcss,
} from "react-icons/si";

const categories = [
  {
    id: 1,
    icon: <FaReact className="text-blue-300" />,
    title: "React & Frontend",
    skills: ["React", "JSX", "Tailwind CSS", "Bootstrap", "Responsive UI"],
  },
  {
    id: 2,
    icon: <SiJavascript className="text-yellow-400" />,
    title: "JavaScript",
    skills: ["ES6+", "DOM", "Async/Await", "Fetch/Axios"],
  },
  {
    id: 3,
    icon: <SiNodedotjs className="text-green-400" />,
    title: "Node.js & Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    id: 4,
    icon: <SiMongodb className="text-green-500" />,
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "Aggregation"],
  },
  {
    id: 5,
    icon: <SiGit className="text-orange-400" />,
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    id: 6,
    icon: <SiTailwindcss className="text-cyan-400" />,
    title: "Styling",
    skills: ["Tailwind", "CSS3", "Animations"],
  },
];

function TechnicalExpertise() {
  return (
    <section id="technical-expertise" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-12 text-gray-100"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-slate-900/72 to-slate-900/56 border border-slate-700/40 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center text-2xl">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">
                    {cat.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full bg-white/8 text-gray-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;
