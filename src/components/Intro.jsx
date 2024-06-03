import React from "react";
import photo from "/src/assets/3.jpg";

function Intro() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-950"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I build web and mobile apps using tools like MERN stack and Flutter. I love creating easy-to-use and reliable applications for everyone.
          </p>

          <div className="mt-4 flex gap-5 text-4xl">
            <a href="https://leetcode.com/meetkothari" target="_blank" title="Leetcode Profile" className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-solid fa-code"></i>
            </a>

            <a href="https://www.linkedin.com/in/meetkothari092/" target="_blank" title="LinkedIn Profile" className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/Meet9292/" title="GitHub Profile" target="_blank" className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-github"></i>
            </a>

            <a href="/21CS023-Meet Kothari.pdf" title="Resume Profile" download className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>

        <div>
          <img
            src={photo}
            alt="my profile"
            className="rounded-2xl mx-auto w-72 md:w-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
