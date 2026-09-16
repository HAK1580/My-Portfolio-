import React, { useRef } from "react";
import "../index.css"
const Projects = () => {
  const project_info = [
    {
      id: 1,
      title: "Ecommerce Perfume Store",
      desc: "Scentra — a sleek, responsive perfume e-commerce site built with React, Tailwind CSS, and Redux Toolkit.",
      image: "/project-imgs/scentra.PNG",
      demo:"https://scentra-dead-final.netlify.app/",
      code:"https://github.com/HAK1580/Scentra-Dead-Final-Production",
    },
    {
      id: 8,
      title: "Expense Tracker App — MERN Stack",
      desc: "Full-stack MERN expense tracker with secure auth and real-time balance tracking.",
      image: "/project-imgs/expense_tracker.png",
      demo:"https://expense-tracker-1580.netlify.app/",
      code:"https://github.com/HAK1580/Expense-tracker-app-frontend",
    },
    {
      id: 7,
      title: "Admin Dashboard ",
      desc: "A responisve Dashboard built using React js and Tailwind CSS. It focus mainly on the structure of the dashboard ",
      image: "/project-imgs/dashboard.PNG",
      demo:"https://admin-dashboard-1580.netlify.app/",
      code:"https://github.com/HAK1580/Admin-Dashboard-",
    },
    
   
   
    
  ];

  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.querySelector(".project-card")?.offsetWidth || 0;
    const scrollAmount = direction === "left" ? -(cardWidth + 80) : cardWidth + 80;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleArrowClick = (e, direction) => {
    handleScroll(direction);
    e.currentTarget.classList.add("clicked");
    setTimeout(() => e.currentTarget.classList.remove("clicked"), 200);
  };

  return (
    <div className="my-12 relative">
      <h1 className='flex  justify-center items-center  my-10 sm:text-[2.5rem] lg:text-[3.7rem] text-[1.5rem]' >
        Projects </h1>


      {/* 🔹 Project Slider */}
      <div
        ref={sliderRef}
        className="flex gap-20 overflow-hidden px-4 w-[80%]  lg:w-[85%] mx-auto scroll-smooth"
      >
        {project_info.map((project) => (
          <div
            key={project.id}
            className="project-card shrink-0 w-[100%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[28%] bg-[#0e0e0e] border border-[#ffffff40] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <a target="_blank"href={project.demo}>
              
            <img
              className="w-full h-60 lg:h-85 sm:h-64 object-cover"
              src={project.image}
              alt={project.title}
              />

              </a>
            <div className="p-4 text-center">
              <h2 className="text-[1.2rem] sm:text-[1.4rem]  font-semibold mt-2">
                {project.title}
              </h2>
              <p className="text-[0.9rem] sm:text-[1rem] h-20 opacity-80 mt-2 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex justify-center gap-5">
                <a target="_blank" href={project.demo} className="bg-blue-600 hover:bg-blue-700 transition z-500 cursor-pointer text-white px-3 py-1.5 rounded-md text-[0.9rem]">
                  Live Demo
                </a>
                <a target="_blank" href={project.code} className="bg-blue-600 hover:bg-blue-700 transition z-500 cursor-pointer text-white px-3 py-1.5 rounded-md text-[0.9rem]">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Left Arrow */}
      <button
        onClick={(e) => handleArrowClick(e, "left")}
        aria-label="Previous project"
        className="arrow-btn cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 z-20"
      >
        <img
          src="/arrow.svg"
          alt="prev"
          className="arrow-icon w-10 h-10 sm:w-12 sm:h-12 rotate-180"
        />
      </button>

      {/* 🔹 Right Arrow */}
      <button
        onClick={(e) => handleArrowClick(e, "right")}
        aria-label="Next project"
        className="arrow-btn cursor-pointer  absolute top-1/2 right-4 transform -translate-y-1/2 z-500"
      >
        <img
          src="/arrow.svg"
          alt="next"
          className="arrow-icon  w-10 h-10 sm:w-12 sm:h-12"
        />
      </button>
    </div>
  );
};

export default Projects;
