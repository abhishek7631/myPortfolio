import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useOnScreen } from "../hooks/useOnScreen";

const contactRow = [
  {
    icon: MdEmail,
    label: "abhishek.choudhary7631@gmail.com",
    href: "mailto:abhishek.choudhary7631@gmail.com",
  },
  {
    icon: MdPhone,
    label: "+91 9576134807",
    href: "tel:+919576134807",
  },
  {
    icon: MdLocationOn,
    label: "Gurgaon, India",
  },
  {
    icon: FiExternalLink,
    label: "Portfolio",
    href: "https://www.linkedin.com/in/abhishek7631/",
    external: true,
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/abhishek7631/",
    label: "LinkedIn",
  },
  {
    icon: null,
    url: "#projects",
    label: "Code",
    isCode: true,
  },
];

function Home() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -left-32 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-600/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 -right-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-600/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 h-56 w-56 rounded-full bg-pink-200/20 blur-3xl dark:bg-pink-600/5"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Abhishek Choudhary
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          I&apos;m a passionate{" "}
          <span className="font-semibold text-sky-600 dark:text-sky-400">
            Full Stack Developer
          </span>{" "}
          with{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-400">
            1.5+ years of experience
          </span>{" "}
          building{" "}
          <span className="font-semibold text-sky-600 dark:text-sky-400">
            scalable web apps
          </span>
          ,{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-400">
            REST APIs
          </span>
          , and modern UIs using the{" "}
          <span className="font-semibold text-sky-600 dark:text-sky-400">
            MERN stack
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400"
        >
          {contactRow.map((item) => {
            const Icon = item.icon;
            const content = (
              <span className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                <Icon className="text-sky-500 shrink-0" size={16} />
                {item.label}
              </span>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              );
            }

            return <span key={item.label}>{content}</span>;
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          {socialLinks.map((social) => {
            if (social.isCode) {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold text-sm shadow-sm hover:shadow-md hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-300"
                >
                  &lt;/&gt;
                </a>
              );
            }

            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center min-w-[180px] px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-md shadow-sky-500/25 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-w-[180px] px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-100 font-semibold border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
