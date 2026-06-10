import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";
import { iconHover } from "../utils/motion";

function Navbar({ dark, setDark }) {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "technical-expertise", text: "Skills" },
    { id: "experience", text: "Experience" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg z-50 border-b border-gray-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex justify-between items-center h-[4.5rem]">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-88}
            className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent cursor-pointer shrink-0"
          >
            Abhishek Kumar Choudhary
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={id}
                    smooth
                    duration={500}
                    offset={-88}
                    className="px-4 py-2.5 text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-300 cursor-pointer rounded-lg hover:bg-gray-100/80 dark:hover:bg-slate-800/80"
                    activeClass="!text-sky-500 dark:!text-sky-400 !font-bold"
                    spy
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <motion.button
              {...iconHover}
              onClick={() => setDark(!dark)}
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-sky-300 dark:hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-md transition-colors duration-300"
              aria-label="toggle dark mode"
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              {...iconHover}
              onClick={() => setDark(!dark)}
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-sky-300 dark:hover:border-sky-600"
              aria-label="toggle dark mode"
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button
              {...iconHover}
              onClick={() => setMenu(!menu)}
              className="w-11 h-11 rounded-xl border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-sky-600 hover:border-sky-300 dark:hover:border-sky-600 transition-colors"
              aria-label="toggle menu"
            >
              {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
            </motion.button>
          </div>
        </div>
      </div>

      {menu && (
        <div className="lg:hidden border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <ul className="max-w-7xl mx-auto px-5 sm:px-6 py-4 space-y-1">
            {navItems.map(({ id, text }) => (
              <li key={id}>
                <Link
                  onClick={() => setMenu(false)}
                  to={id}
                  smooth
                  duration={300}
                  offset={-88}
                  className="block px-4 py-3.5 text-base text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-900 rounded-xl transition-colors font-semibold cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
