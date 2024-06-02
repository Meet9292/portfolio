import React from 'react'

function Services() {
    return (
        <>
          <div className="main-container py-14">
            <h1 className="text-5xl font-bold text-center underline">
              My Services
            </h1>
            <div className="services-container space-x-5 px-10 flex mt-12">

            <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
                <i class="text-5xl fa-solid fa-brands fa-react"></i>
                <h1 className="text-4xl">Frontend Development</h1>
                <p>
                I create the parts of websites and apps that users see and interact with. Using tools like React, I make sure everything looks good and works well on any device.
                </p>
              </div>

              <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
               <i class="text-5xl fa-solid fa-server"></i>
                <h1 className="text-4xl">Backend Development</h1>
                <p>
                I build the behind-the-scenes parts of websites and apps. Using Node.js and Express, I make sure everything runs smoothly and can handle lots of users.
                </p>
              </div>

              <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
                <i class=" text-5xl fa-solid fa-mobile"></i>
                <h1 className="text-4xl">Flutter Development</h1>
                <p>
                I develop mobile apps that work on both iOS and Android using Flutter. This allows me to create apps that look great and work perfectly on any phone or tablet.
                </p>
              </div>

            </div>
          </div>
        </>
      );
}

export default Services