import React from "react";

function Projects() {
  const projectData = [
    {
      id: 1,
      name: "Wanderlust - Full-Stack Marketplace Application",
      description:
        "Wanderlust is a full-stack online marketplace, similar to Airbnb, that connects property owners with travelers seeking short-term accommodations. Developed using MongoDB, Node.js, Express, and EJS with MVC architecture for organized and scalable code.",
      liveLink: "#", // Replace with the live link of your project
      repoLink: "#", // Replace with the GitHub repo link
    },
    {
      id: 2,
      name: "Movie Guide App",
      description:
        "A responsive movie search application using HTML, CSS, and JavaScript. Features a dynamic search bar for querying movie details and rendering relevant information with images on the results page.",
      liveLink: "#", // Replace with the live link of your project
      repoLink: "#", // Replace with the GitHub repo link
    },
    {
      id: 3,
      name: "Recipe App",
      description:
        "An interactive recipe search app using HTML, CSS, and JavaScript. Users can search for recipes and view details such as ingredients and instructions, with individual recipe cards revealing more details when clicked.",
      liveLink: "#", // Replace with the live link of your project
      repoLink: "#", // Replace with the GitHub repo link
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map(({ id, name, description, liveLink, repoLink }) => (
            <div
              key={id}
              className="border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl p-6 duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {name}
              </h2>
              <p className="text-gray-600 mb-6">{description}</p>
              <div className="flex justify-around space-x-4">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Live Project
                </a>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
