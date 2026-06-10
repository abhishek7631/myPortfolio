import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaAward, FaMugHot, FaBuilding } from "react-icons/fa";
import profile_img from "../assets/profile_img.jpg";
import { buttonHover, subtleHover } from "../utils/motion";

const stats = [
  {
    icon: FaAward,
    value: "1.5+",
    label: "Years Experience",
  },
  {
    icon: FaMugHot,
    value: "4+",
    label: "Featured Projects",
  },
  {
    icon: FaBuilding,
    value: "2+",
    label: "Companies",
  },
];

function About() {
  const ref = useRef();
  const visible = useOnScreen(ref);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Abhishek_Updated_Resume.pdf";
    link.download = "Abhishek_Updated_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl dark:bg-sky-600/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-pink-300/15 blur-3xl dark:bg-pink-600/10"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200/40 to-violet-200/40 dark:from-sky-600/20 dark:to-violet-600/20 blur-2xl scale-110"
              />
              <motion.img
                whileHover={{ scale: 1.04, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
                src={profile_img}
                alt="Abhishek Choudhary"
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-xl hover:shadow-2xl border-4 border-white dark:border-slate-800 transition-shadow duration-300 cursor-pointer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              Full Stack Developer &amp; Problem Solver
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Full Stack (MERN) Developer with professional experience in
                building scalable and performance-driven web applications.
                Currently working as a Frontend Developer at V Power Logistics,
                with strong expertise in React.js, Redux, authentication flows,
                and component-based architecture.
              </p>
              <p>
                I specialize in integrating RESTful APIs, managing global
                application state, and optimizing frontend performance while
                maintaining clean and maintainable code. I enjoy converting
                designs into responsive, pixel-perfect UI components.
              </p>
              <p>
                With a solid backend foundation in Node.js, Express.js, and
                MongoDB, I bring an end-to-end mindset to every project — from
                database design to polished user interfaces.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    {...subtleHover}
                    className="text-center sm:text-left p-3 rounded-xl hover:bg-sky-50/80 dark:hover:bg-sky-900/20 transition-colors duration-300"
                  >
                    <div className="inline-flex w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-900/30 items-center justify-center text-sky-600 dark:text-sky-400 mb-2">
                      <Icon size={18} />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              {...buttonHover}
              onClick={handleResumeDownload}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-colors duration-300"
            >
              <HiDownload size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
