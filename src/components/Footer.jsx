import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      icon: FaTwitter,
      url: "#",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: FaInstagram,
      url: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaLinkedinIn,
      url: "#",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-gradient-to-r from-slate-950 via-purple-900/20 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-purple-500/20 dark:border-purple-600/20"
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  aria-label={social.label}
                  className={`text-gray-400 dark:text-gray-400 text-2xl transition-all duration-300 ${social.color}`}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-center text-sm"
          >
            <span className="font-semibold text-purple-300 dark:text-purple-200">
              Abhishek Choudhary
            </span>{" "}
            &copy; {new Date().getFullYear()}. All rights reserved. | MERN Stack
            Developer
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />

          {/* Built with */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-gray-500 dark:text-gray-500"
          >
            Built with React, Framer Motion & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
