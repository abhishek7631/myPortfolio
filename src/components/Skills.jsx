import React from "react";

function Skills() {
  const skillsCategories = [
    {
      id: 1,
      category: "Front-End Development",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    },
    {
      id: 2,
      category: "Back-End Development",
      skills: ["Node.js", "Express.js"],
    },
    {
      id: 3,
      category: "Databases",
      skills: ["MongoDB", "SQL"],
    },
    {
      id: 4,
      category: "Version Control & Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      id: 5,
      category: "Concepts",
      skills: ["Object-Oriented Programming (OOP)", "RESTful APIs"],
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategories.map(({ id, category, skills }) => (
          <div
            key={id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              {category}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
