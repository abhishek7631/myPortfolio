import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";

function Experience() {
  const ref = useRef();
  const visible = useOnScreen(ref);

  const experienceDetails = [
    {
      id: 1,
      title: "MERN Stack Developer Intern",
      company: "Scalefull Technologies",
      duration: "07/2024 - Present",
      description:
        "Developed full-stack web applications using the MERN stack, built responsive front-end interfaces, and collaborated with teams using Git for version control.",
    },
    {
      id: 2,
      title: "Front-end Developer Intern",
      company: "iNeuron.ai",
      duration: "01/2024 - 06/2024",
      description:
        "Developed an E-commerce platform, implemented responsive UIs, and integrated front-end with back-end APIs.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="space-y-6"
        >
          {experienceDetails.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-slate-900/60 dark:bg-slate-900/84 border border-slate-700/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-300">@ {exp.company}</p>
                </div>
                <div className="text-sm text-gray-400">{exp.duration}</div>
              </div>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
