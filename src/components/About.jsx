function About() {
    return (
        <>
          <div className="main-container bg-gray-100 border py-16">
            <h1 className="text-center pb-16  text-5xl underline font-bold">
              About Me
            </h1>
    
            <div className="flex items-center">
              {/* image container */}
              <div className="w-full flex justify-center">
                <img
                  className="w-fit"
                  src= "src/assets/3.jpg"
                  alt="durgesh kumar tiwari"
                />
              </div>
    
              {/* text container  */}
              <div className="w-full  flex justify-center">
                <div className="space-y-5   w-2/3">
                  <h1 className="text-5xl  font-semibold ">Software Developer</h1>
                  <p>I am a software developer who loves building web apps using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. These tools help me create fast and reliable web applications that can handle a lot of users.</p>
                  <p>I also develop hybrid mobile apps using Flutter. This means I can make apps that work well on both iOS and Android devices, providing a smooth and enjoyable experience for users on any platform.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default About