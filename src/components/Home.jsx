import React, { useRef } from "react";
import { motion } from "framer-motion";
import profile_img from "../../public/profile_img.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { useOnScreen } from "../hooks/useOnScreen";

function Home() {
  const ref = useRef();
  const visible = useOnScreen(ref, "-100px");

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/abhishek7631/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaSquareFacebook,
      url: "https://www.facebook.com/",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: FaTelegram,
      url: "https://t.me/",
      label: "Telegram",
      color: "hover:text-sky-400",
    },
    {
      icon: IoLogoYoutube,
      url: "https://www.youtube.com/",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  return (
    <motion.section
      id="home"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-950 via-purple-900/5 to-slate-950 dark:from-slate-950 dark:via-blue-900/5 dark:to-slate-950 overflow-hidden"
    >
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-purple-400 dark:text-purple-300 text-lg font-semibold">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm <span className="text-white">Abhishek</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 leading-relaxed max-w-2xl">
              <span className="font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>{" "}
              crafting modern, interactive web experiences with cutting-edge
              technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block border-2 border-purple-400 text-purple-300 dark:text-purple-200 hover:bg-purple-400/10 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <p className="text-gray-400 dark:text-gray-400 font-semibold">
              Follow me:
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 dark:text-gray-400 text-2xl transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={visible ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.div
            className="relative"
            animate={{
              y: visible ? [0, 20, 0] : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-50" />

            {/* Profile image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={profile_img}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-purple-500/50 shadow-2xl shadow-purple-500/30"
              alt="Abhishek Choudhary"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-400 text-sm font-semibold"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
