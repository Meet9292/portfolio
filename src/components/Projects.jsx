import React from "react";
import project1 from "/src/assets/project1.png";
import project2 from "/src/assets/project2.jpg";
import project3 from "/src/assets/project3.jpg";
import project4 from "/src/assets/project4.png";

function Projects() {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Ghar - Real Estate Platform",
      description: "Ghar is a modern Real Estate Platform crafted with the powerful MERN stack and styled with Tailwind CSS, offering seamless property browsing and management.",
      codeLink: "https://github.com/Meet9292/Ghar",
    },
    {
      id: 2,
      src: project2,
      title: "Viewify - Video Sharing Platform",
      description: "Viewify is a dynamic Video Sharing Platform, akin to YouTube, providing users with the ability to upload, view, and share videos effortlessly",
      codeLink: "https://github.com/Meet9292/Viewify",
    },
    {
      id: 3,
      src: project3,
      title: "Scholarship Portal",
      description: "The Scholarship Portal is a static app developed using Flutter and Firebase, offering students access to essential scholarship information without dynamic functionalities",
      codeLink: "https://github.com/Meet9292/Scholarship_app",
    },
    {
      id: 4,
      src: project4,
      title: "GrowTogethor",
      description: "GrowTogether is an app for farmers, offering chat, government schemes, and expert advice on agriculture.",
      codeLink: "https://github.com/Meet9292/GrowTogether",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-900 to-black w-full text-white py-14"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold text-center underline">Projects</p>
        </div>
        <br />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, codeLink }) => (
            <div
              key={id}
              className="relative group shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={src}
                alt={title}
                className="rounded-lg w-full h-48 object-cover duration-200 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-200 bg-black bg-opacity-75">
                <div className="text-center p-4">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <p className="text-gray-300 mt-2">{description}</p>
                </div>
              </div>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;