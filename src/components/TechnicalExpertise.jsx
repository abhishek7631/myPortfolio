import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaGitAlt, FaLightbulb } from "react-icons/fa";
import SkillProgressBar from "./common/SkillProgressBar";

const categories = [
  {
    id: 1,
    title: "Front-End Development",
    iconGradient: "from-sky-500 to-blue-600",
    icon: (
      <span className="text-white font-bold text-base leading-none">&lt;/&gt;</span>
    ),
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "React", level: 92 },
      { name: "Redux", level: 86 },
    ],
  },
  {
    id: 2,
    title: "Back-End Development",
    iconGradient: "from-emerald-500 to-teal-600",
    icon: <FaServer className="text-white text-lg" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    id: 3,
    title: "Databases",
    iconGradient: "from-green-500 to-emerald-600",
    icon: <FaDatabase className="text-white text-lg" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    id: 4,
    title: "Version Control",
    iconGradient: "from-orange-500 to-amber-600",
    icon: <FaGitAlt className="text-white text-lg" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "Postman", level: 86 },
      { name: "VS Code", level: 92 },
    ],
  },
  {
    id: 5,
    title: "Concepts",
    iconGradient: "from-violet-500 to-indigo-600",
    icon: <FaLightbulb className="text-white text-lg" />,
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 82 },
      { name: "RESTful APIs", level: 90 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const cardBaseClass =
  "flex flex-col w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] h-[32rem] rounded-2xl border border-gray-200/80 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/75 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300";

function TechnicalExpertise() {
  return (
    <section id="technical-expertise" className="py-20 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500" />
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Technologies and tools I use to ship scalable, production-ready apps.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, index) => (
            <motion.article
              key={cat.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className={cardBaseClass}
            >
              <div className="flex items-center gap-4 mb-6 shrink-0">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.iconGradient} flex items-center justify-center shrink-0 shadow-md`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col justify-start gap-5">
                {cat.skills.map((skill, skillIndex) => (
                  <SkillProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.08 + skillIndex * 0.06}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalExpertise;
