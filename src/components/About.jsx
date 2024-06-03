import React from "react";
import photo from "/src/assets/3.jpg";

function About() {
  return (
    <>
      <div
        name="about"
        className="main-container bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 py-14"
      >
        <h1 className="text-center text-white pb-16 text-5xl underline font-bold">
          About Me
        </h1>
        <br /><br />
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              className="w-64 md:w-96 rounded-full"
              src={photo}
              alt="my profile"
            />
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="space-y-5 w-4/5 md:w-full">
              <h1 className="text-5xl text-gray-300 font-semibold">
                Software Developer
              </h1>
              <p className="text-gray-500">
                I am a software developer who loves building web apps using
                the MERN stack, which includes MongoDB, Express.js, React, and
                Node.js. These tools help me create fast and reliable web
                applications that can handle a lot of users.
              </p>
              <p className="text-gray-500">
                I also develop hybrid mobile apps using Flutter. This means I
                can make apps that work well on both iOS and Android devices,
                providing a smooth and enjoyable experience for users on any
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
