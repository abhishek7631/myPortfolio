import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const educationDetails = [
    {
      title:
        "Bachelor of Technology (B.Tech), Jawaharlal Nehru Engineering College",
      duration: "12/2020 - 07/2024",
      description: "Courses: COMPUTER SCIENCE ENGINEERING",
    },
    {
      title: "XIIth Grade, Mahatma Gandhi College",
      duration: "06/2016 - 06/2018",
    },
    {
      title: "Xth Grade, V S B High School",
      duration: "05/2016",
    },
  ];

  const experienceDetails = [
    {
      title: "MERN Stack Developer Intern",
      company: "Scalefull Technologies",
      duration: "07/2024 - Present",
      description:
        "Developed full-stack web applications using the MERN stack, built responsive front-end interfaces, and collaborated with teams using Git for version control.",
    },
    {
      title: "Front-end Developer Intern",
      company: "iNeuron.ai",
      duration: "01/2024 - 06/2024",
      description:
        "Developed an E-commerce platform, implemented responsive UIs, and integrated front-end with back-end APIs.",
    },
  ];

  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      name="About"
    >
      <h1 className="text-3xl font-bold mb-10 text-center">About Me</h1>
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab("education")}
          className={`px-6 py-2 font-semibold text-white rounded-lg ${
            activeTab === "education"
              ? "bg-green-600"
              : "bg-gray-400 hover:bg-green-500"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-6 py-2 font-semibold text-white rounded-lg ${
            activeTab === "experience"
              ? "bg-green-600"
              : "bg-gray-400 hover:bg-green-500"
          }`}
        >
          Experience
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {activeTab === "education" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="space-y-4">
              {educationDetails.map((edu, index) => (
                <li key={index} className="border-b pb-4">
                  <h3 className="text-lg font-medium">{edu.title}</h3>
                  <p className="text-sm text-gray-600">{edu.duration}</p>
                  {edu.description && (
                    <p className="text-gray-700">{edu.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="space-y-4">
              {experienceDetails.map((exp, index) => (
                <li key={index} className="border-b pb-4">
                  <h3 className="text-lg font-medium">
                    {exp.title} -{" "}
                    <span className="text-green-600">{exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-600">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
