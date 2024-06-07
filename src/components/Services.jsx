import React from 'react';

function Services() {
  return (
    <div name="services" className="main-container pb-14 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
      <h1 className="text-5xl font-bold text-center underline text-white mb-16">
        Services
      </h1>
      <div className="services-container space-y-10 px-10 flex flex-wrap justify-center">
        <div className="cursor-pointer hover:bg-gray-600 space-y-3 bg-slate-700 p-5 text-center shadow-lg rounded-xl">
          <i className="text-5xl fa-solid fa-brands fa-react"></i>
          <h1 className="text-4xl">Frontend Development</h1>
          <p className="">
            I create the parts of websites and apps that users see and interact with. Using tools like React, I make sure everything looks good and works well on any device.
          </p>
        </div>
        <div className="cursor-pointer hover:bg-gray-600 space-y-3 bg-slate-700 p-5 text-center shadow-lg rounded-xl">
          <i className="text-5xl fa-solid fa-server"></i>
          <h1 className="text-4xl">Backend Development</h1>
          <p>
            I build the behind-the-scenes parts of websites and apps. Using Node.js and Express, I make sure everything runs smoothly and can handle lots of users.
          </p>
        </div>
        {/* <div className="cursor-pointer hover:bg-gray-600 space-y-3 bg-slate-700 p-5 text-center shadow-lg rounded-xl">
          <i className=" text-5xl fa-solid fa-mobile"></i>
          <h1 className="text-4xl">Flutter Development</h1>
          <p>
            I develop mobile apps that work on both iOS and Android using Flutter. This allows me to create apps that look great and work perfectly on any phone or tablet.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
