import React from "react";
import { motion } from "framer-motion";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Jawaharlal Nehru Engineering College",
    duration: "12/2020 - 07/2024",
    description: "Courses: COMPUTER SCIENCE ENGINEERING",
  },
  {
    id: 2,
    degree: "XIIth Grade",
    institution: "Mahatma Gandhi College",
    duration: "06/2016 - 06/2018",
  },
  {
    id: 3,
    degree: "Xth Grade",
    institution: "V S B High School",
    duration: "05/2016",
  },
];

function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="space-y-6">
          {educationDetails.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-900/50 dark:bg-slate-900/80 border border-slate-700/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-purple-300">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400">{edu.institution}</p>
                </div>
                <div className="text-sm text-gray-500">{edu.duration}</div>
              </div>
              {edu.description && (
                <p className="mt-3 text-gray-400 text-sm">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
