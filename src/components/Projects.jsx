import React, { useRef } from "react";
import "../index.css"
const Projects = () => {
  const project_info = [
    {
      id: 1,
      title: "Ecommerce Perfume Store",
      desc: "Scentra — a sleek, responsive perfume e-commerce site built with React, Tailwind CSS, and Redux Toolkit.",
      image: "/project-imgs/scentra.PNG",
    },
    {
      id: 2,
      title: "Weather App",
      desc: "A responsive weather app built with React that fetches real-time data using a public Weather API.",
      image: "/project-imgs/weatherapp.png",
    },
    {
      id: 3,
      title: "University Admission Form",
      desc: "A React-based admission form with real-time validation and smooth user experience.",
      image: "/project-imgs/admissionform.PNG",
    },
    {
      id: 4,
      title: "Netflix UI Clone",
      desc: "A responsive Netflix UI clone built with HTML, CSS, and Vanilla JavaScript.",
      image: "/project-imgs/netflix.jpg",
    },
    {
      id: 5,
      title: "Calculator App",
      desc: "A simple, responsive calculator app built using HTML, CSS, and JavaScript.",
      image: "/project-imgs/calculater.PNG",
    },
  ];

  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.querySelector(".project-card")?.offsetWidth || 0;
    const scrollAmount = direction === "left" ? -(cardWidth + 40) : cardWidth + 40;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleArrowClick = (e, direction) => {
    handleScroll(direction);
    e.currentTarget.classList.add("clicked");
    setTimeout(() => e.currentTarget.classList.remove("clicked"), 200);
  };

  return (
    <div className="my-12 relative">
      <h1 className="flex justify-center items-center text-[1.9rem] sm:text-[2.5rem] lg:text-[3.2rem] font-semibold mb-6">
        Projects
      </h1>

      {/* 🔹 Project Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden px-4 w-[95%] lg:w-[85%] mx-auto scroll-smooth"
      >
        {project_info.map((project) => (
          <div
            key={project.id}
            className="project-card shrink-0 w-[85%] xs:w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-[#0e0e0e] border border-[#ffffff40] rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              className="w-full h-60 sm:h-64 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4 text-center">
              <h2 className="text-[1.2rem] sm:text-[1.4rem] font-semibold mt-2">
                {project.title}
              </h2>
              <p className="text-[0.9rem] sm:text-[1rem] h-20 opacity-80 mt-2 mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex justify-center gap-5">
                <button className="bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white px-3 py-1.5 rounded-md text-[0.9rem]">
                  Live Demo
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 transition cursor-pointer text-white px-3 py-1.5 rounded-md text-[0.9rem]">
                  View Code
                </button>
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
          src="arrow.svg"
          alt="prev"
          className="arrow-icon w-10 h-10 sm:w-12 sm:h-12 rotate-180"
        />
      </button>

      {/* 🔹 Right Arrow */}
      <button
        onClick={(e) => handleArrowClick(e, "right")}
        aria-label="Next project"
        className="arrow-btn cursor-pointer  absolute top-1/2 right-4 transform -translate-y-1/2 z-1000"
      >
        <img
          src="arrow.svg"
          alt="next"
          className="arrow-icon  w-10 h-10 sm:w-12 sm:h-12"
        />
      </button>
    </div>
  );
};

export default Projects;
