import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaChevronRight,
} from "react-icons/fa";
import { cardHover } from "../utils/motion";

const educationDetails = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Jawaharlal Nehru Engineering College",
    duration: "Dec 2020 – Jul 2024",
    badge: "Graduated",
    field: "Computer Science Engineering",
    meta: "Computer Science Engineering",
    summary:
      "Completed a four-year undergraduate program in Computer Science Engineering, building core expertise in software development, algorithms, and modern computing fundamentals.",
    highlights: [
      "Specialized in Computer Science Engineering with focus on full stack development",
      "Studied data structures, databases, object-oriented programming, and web technologies",
      "Developed practical skills through academic projects and hands-on lab work",
    ],
    subjects: [
      "Data Structures",
      "DBMS",
      "OOP",
      "Computer Networks",
      "Web Development",
    ],
  },
  {
    id: 2,
    degree: "XIIth Grade",
    institution: "Mahatma Gandhi College",
    duration: "Jun 2016 – Jun 2018",
    badge: "Higher Secondary",
    meta: "Higher Secondary Education",
    summary:
      "Completed higher secondary education with a strong academic foundation in science and mathematics.",
    highlights: [
      "Completed XIIth grade with focus on science stream",
      "Built analytical and problem-solving skills for higher education",
    ],
  },
  {
    id: 3,
    degree: "Xth Grade",
    institution: "V S B High School",
    duration: "May 2016",
    badge: "Secondary",
    meta: "Secondary School Education",
    summary:
      "Completed secondary school education, establishing a solid base for further academic pursuits.",
    highlights: [
      "Completed Xth grade with consistent academic performance",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

function EducationCard({ edu }) {
  return (
    <motion.article
      {...cardHover}
      className="rounded-2xl border border-gray-200/80 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm p-6 shadow-md hover:shadow-xl hover:border-violet-300/40 dark:hover:border-violet-600/30 transition-[box-shadow,border-color] duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-gray-500 dark:text-gray-400">
            <FaGraduationCap className="text-lg" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
              {edu.institution}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
              {edu.degree}
            </p>
          </div>
        </div>
        {edu.badge && (
          <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            {edu.badge}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <FaCalendarAlt className="text-sky-500 shrink-0" />
          {edu.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaUniversity className="text-sky-500 shrink-0" />
          {edu.meta}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {edu.summary}
      </p>

      {edu.highlights?.length > 0 && (
        <>
          <h4 className="mt-5 text-sm font-bold text-gray-900 dark:text-gray-100">
            Key Highlights:
          </h4>
          <ul className="mt-2 space-y-2">
            {edu.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <FaChevronRight className="text-sky-500 mt-1 shrink-0 text-xs" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {edu.subjects?.length > 0 && (
        <>
          <h4 className="mt-5 text-sm font-bold text-gray-900 dark:text-gray-100">
            Core Subjects:
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {edu.subjects.map((subject) => (
              <span
                key={subject}
                className="text-xs font-medium px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </>
      )}

    </motion.article>
  );
}

function Education() {
  const ref = useRef();
  const visible = useOnScreen(ref);

  return (
    <motion.section
      id="education"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/10"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Education &{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500" />
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-3 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-violet-200 dark:bg-violet-800/80"
          />

          <div className="space-y-12 md:space-y-16">
            {educationDetails.map((edu, index) => (
              <motion.div
                key={edu.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className={`relative flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-violet-500 border-[3px] border-white dark:border-slate-900 shadow-sm z-10"
                />

                <div
                  className={`w-full ml-8 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                  }`}
                >
                  <EducationCard edu={edu} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
