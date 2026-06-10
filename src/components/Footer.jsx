import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { iconHover } from "../utils/motion";

const quickLinks = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "technical-expertise", text: "Skills" },
  { id: "experience", text: "Experience" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

const contactInfo = {
  email: "abhishek.choudhary7631@gmail.com",
  phone: "+91 9576134807",
  location: "Gurgaon, India",
};

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
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold">
              <span className="text-sky-400">Abhishek</span>{" "}
              <span className="text-violet-400">Choudhary</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              MERN Stack Software Engineer passionate about building scalable,
              user-friendly web applications with modern technologies and clean
              code practices.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    {...iconHover}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/50 hover:shadow-md hover:shadow-sky-500/10 transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-sm text-gray-400 hover:text-sky-400 hover:translate-x-1 cursor-pointer transition-all duration-300 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MdEmail className="text-sky-400 mt-0.5 shrink-0" size={18} />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-sky-400 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MdPhone className="text-sky-400 mt-0.5 shrink-0" size={18} />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-sky-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MdLocationOn className="text-sky-400 mt-0.5 shrink-0" size={18} />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Abhishek Choudhary. Made with{" "}
            <span className="text-red-400">♥</span> and React
          </p>
          <p>Built with MERN Stack</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
