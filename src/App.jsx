import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import TechnicalExpertise from "./components/TechnicalExpertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";
import { Toaster } from "react-hot-toast";

function App() {
  const [dark, setDark] = useState(() => {
    // Default to dark theme
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // sync with document class and localstorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div
      className={`${dark ? "dark" : ""} text-gray-800 bg-white dark:bg-dark-bg antialiased`}
    >
      <Starfield />
      <Navbar dark={dark} setDark={setDark} />
      <main className="space-y-32 pt-16">
        <Home />
        <About />
        <Education />
        <Experience />
        <TechnicalExpertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
