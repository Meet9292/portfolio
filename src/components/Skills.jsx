import React from 'react';
import html from "/src/assets/html.png";
import css from "/src/assets/css.png";
import javascript from "/src/assets/javascript.png";
import reactImage from "/src/assets/react.png";
import node from "/src/assets/node.png";
import github from "/src/assets/github.png";
import tailwind from "/src/assets/tailwind.png";
import flutter from "/src/assets/flutter.png";
import firebase from "/src/assets/firebase.png";
import mongo from "/src/assets/mongo.png";
import cpp from "/src/assets/cpp.png";

function Skills() {
  const techs = [
    { id: 1, src: cpp, title: "C++", style: "shadow-blue-500" },
    { id: 2, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 7, src: node, title: "Node JS", style: "shadow-green-400" },
    { id: 8, src: mongo, title: "MongoDB", style: "shadow-green-500" },
    // { id: 8, src: flutter, title: "Flutter", style: "shadow-blue-400" },
    // { id: 9, src: firebase, title: "FireBase", style: "shadow-yellow-400" },
    { id: 9, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-gray-900 w-full min-h-screen py-12">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div>
          <p className="text-4xl text-center underline font-bold mb-12">
            Skills
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:shadow-lg duration-500 py-6 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto mb-4" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
