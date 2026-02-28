import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Full Stack (MERN) Developer with professional experience in building
          scalable and performance-driven web applications. Currently working as
          a Frontend Developer with strong expertise in React.js, Context API,
          authentication flows, and component-based architecture. Experienced in
          integrating RESTful APIs and optimizing frontend performance while
          maintaining clean and maintainable code. Solid backend foundation in
          Node.js, Express.js, and MongoDB for end-to-end application
          development.
        </p>
      </div>
    </section>
  );
}

export default About;
