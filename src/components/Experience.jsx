import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { cardHover } from "../utils/motion";

const experienceDetails = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "V Power Logistics",
    duration: "Jan 2025 – Present",
    location: "Gurgaon • Full-time",
    isCurrent: true,
    summary:
      "Developing and maintaining an internal admin dashboard for logistics operations, focusing on secure access, scalable UI architecture, and high-performance React applications.",
    achievements: [
      "Built an internal admin dashboard handling 1,000+ operational records, improving data visibility and management efficiency",
      "Implemented secure authentication and role-based access control for protected application modules",
      "Managed global application state using Redux for efficient and predictable cross-component data flow",
      "Integrated REST APIs using Axios for seamless frontend and backend communication",
      "Developed reusable UI components including tables, forms, modals, and cards to improve development efficiency",
      "Optimized application performance using lazy loading and debounced search techniques",
      "Converted Figma designs into responsive, pixel-perfect UI components using React.js and modern CSS practices",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Axios",
      "REST APIs",
      "JavaScript",
      "CSS",
      "Figma",
    ],
  },
  {
    id: 2,
    title: "MERN Stack Developer Intern",
    company: "Scalefull Technologies",
    duration: "Jun 2024 – Dec 2024",
    location: "Pune • Internship",
    isCurrent: false,
    summary:
      "Contributed to full-stack MERN applications in an agile team environment, building responsive interfaces, RESTful APIs, and optimized database schemas.",
    achievements: [
      "Assisted in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), contributing to a 20% increase in team productivity by automating internal workflows",
      "Collaborated with a team of 4+ developers to design and implement responsive, user-centric interfaces using React.js",
      "Designed and optimized MongoDB database schemas and developed RESTful APIs, reducing data retrieval time by 30%",
      "Utilized Git for version control and collaborative project management in an agile development environment",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST APIs",
      "Git",
      "Agile",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15 },
  }),
};

function ExperienceCard({ exp }) {
  return (
    <motion.article
      {...cardHover}
      className="rounded-2xl border border-gray-200/80 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm p-6 shadow-md hover:shadow-xl hover:border-sky-300/40 dark:hover:border-sky-600/30 transition-[box-shadow,border-color] duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-gray-500 dark:text-gray-400">
            <FaBuilding className="text-lg" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
              {exp.company}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-0.5">
              {exp.title}
            </p>
          </div>
        </div>
        {exp.isCurrent && (
          <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            Current
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <FaCalendarAlt className="text-sky-500 shrink-0" />
          {exp.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-sky-500 shrink-0" />
          {exp.location}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {exp.summary}
      </p>

      <h4 className="mt-5 text-sm font-bold text-gray-900 dark:text-gray-100">
        Key Achievements:
      </h4>
      <ul className="mt-2 space-y-2">
        {exp.achievements.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <FaChevronRight className="text-sky-500 mt-1 shrink-0 text-xs" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h4 className="mt-5 text-sm font-bold text-gray-900 dark:text-gray-100">
        Technologies Used:
      </h4>
      <div className="mt-2 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function Experience() {
  const ref = useRef();
  const visible = useOnScreen(ref);

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/50 via-transparent to-violet-50/30 dark:from-sky-950/20 dark:via-transparent dark:to-violet-950/10"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Work Experience
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
          <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            My professional journey in full stack development
          </p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-3 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-sky-200 dark:bg-sky-800/80"
          />

          <div className="space-y-12 md:space-y-16">
            {experienceDetails.map((exp, index) => (
              <motion.div
                key={exp.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute left-3 md:left-1/2 top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky-500 border-[3px] border-white dark:border-slate-900 shadow-sm z-10"
                />

                <div
                  className={`w-full ml-8 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                  }`}
                >
                  <ExperienceCard exp={exp} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
