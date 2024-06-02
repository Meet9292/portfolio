import React from "react";

function Intro() {
  return (
    <div
      style={{
        backgroundImage: `url(src/assets/banner_wallpaper.svg)`,
        backgroundSize: "cover",
      }}
      className="flex items-center"
    >
      <div className="w-full flex justify-center text-white">
        <div className="w-2/3 ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className=" mt-3 text-5xl font-bold">Meet Kothari</h1>
          <h2 className="mt-3 text-2xl">I am Developer</h2>
          <p className="mt-3">
          I build web and mobile apps using tools like MERN stack and Flutter. I love creating easy-to-use and reliable applications for everyone.
          </p>
          <div className="mt-4 flex gap-5 text-4xl">
            <a className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
            <i class="fa-solid fa-code"></i>
            </a>

            <a className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a className="border hover:bg-orange-500 cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <br />
          <br />
          <a
            className="text-2xl px-4 py-3 bg-orange-500 rounded-full shadow"
            href="/contact"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="rounded-full shadow-lg w-fit"
          src="src/assets/1.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;




