import React from 'react';

const About = () => {
  return (
    <section className="my-20 px-4">
      <h1 className="flex justify-center items-center my-10 text-2xl sm:text-4xl lg:text-6xl font-bold">
        About Me
      </h1>

      <div className="about-me mx-auto w-[95%] max-w-6xl flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
        
        {/* Image - Hidden on screens smaller than lg (1024px) */}
        <img 
          className="w-full max-w-md rounded-md object-cover hidden lg:block" 
          src="aboutimg.png" 
          alt="M. Hassan Ali Khan" 
        />

        {/* Text Description */}
        <div className="desc w-full lg:w-[55%] text-gray-200 leading-relaxed">
          <p className="text-base md:text-lg lg:text-xl relative pl-4">
            <span className="text-3xl font-serif text-blue-400 absolute -left-2 -top-2">"</span>
            I'm <span className="font-semibold text-white">M. Hassan Ali Khan</span>, a Full-Stack Web Developer with hands-on experience building responsive and user-friendly web applications. Skilled in{" "}
            <span className="text-blue-400 font-medium">
              React.js, Redux Toolkit, JavaScript, Tailwind CSS, MongoDB, and Express.js
            </span>
            , I've developed full-stack systems including an{" "}
            <span className="text-blue-400 font-medium">
              e-commerce platform, Expense Tracker, Admin Dashboard, and UI Clones
            </span>
            . I focus on clean architecture, efficient APIs, and delivering seamless user experiences across all devices.
            <span className="text-3xl font-serif text-blue-400 leading-none"> "</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;