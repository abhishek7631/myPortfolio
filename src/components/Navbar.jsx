import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import toast from "react-hot-toast";

function Navbar({ dark, setDark }) {
  const [menu, setMenu] = useState(false);
  // use explicit ids that match section `id` attributes (all lowercase)
  const navItems = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "education", text: "Education" },
    { id: "experience", text: "Experience" },
    { id: "technical-expertise", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  const handleResumeDownload = () => {
    // download the actual resume placed in public folder
    const link = document.createElement("a");
    link.href = "/Abhishek_Updated_Resume.pdf"; // file in public directory
    link.download = "Abhishek_Updated_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 backdrop-blur-md z-50 shadow-2xl border-b border-purple-700/30 dark:border-purple-600/20 animate-fadeIn">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 min-w-fit">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg p-2">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Abhishek
              </h1>
              <p className="text-xs text-purple-300 font-semibold">
                MERN Developer
              </p>
            </div>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-12">
            <ul className="flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li key={id} className="group">
                  <Link
                    to={id}
                    smooth={true}
                    duration={500}
                    offset={-80} // account for navbar height
                    className="text-gray-200 hover:text-purple-300 transition-colors duration-300 cursor-pointer text-sm font-medium relative"
                  >
                    {text}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Resume Download Button */}
            <button
              onClick={handleResumeDownload}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 group"
              aria-label="download resume"
            >
              <HiDownload size={18} className="group-hover:animate-bounce" />
              <span className="text-sm">Resume</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg text-gray-300 hover:text-purple-300 hover:bg-purple-700/30 dark:hover:bg-purple-600/30 transition-all duration-300"
              aria-label="toggle dark mode"
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenu(!menu)}
              className="lg:hidden p-2 text-gray-300 hover:text-purple-300 hover:bg-purple-700/30 rounded-lg transition-all duration-300"
              aria-label="toggle menu"
            >
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 border-t border-purple-700/30">
          <div className="container mx-auto px-4 md:px-20 py-6 space-y-4">
            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeDownload}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300"
            >
              <HiDownload size={18} />
              <span>Download Resume</span>
            </button>

            {/* Mobile Navigation */}
            <ul className="flex flex-col space-y-2">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    onClick={() => setMenu(false)}
                    to={id}
                    smooth="easeInOutQuad"
                    duration={300}
                    offset={-80}
                    className="block px-4 py-2 text-gray-200 hover:text-purple-300 hover:bg-purple-700/30 rounded-lg transition-all duration-300 font-medium cursor-pointer"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
