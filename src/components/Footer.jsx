import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-50 bg-[#0a0a0a] text-white py-14 px-6 border-t border-blue-800">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 text-center lg:text-left">
        {/* 🔹 Left Section */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <h2 className="text-2xl font-bold text-blue-500">Ali Official</h2>
          <p className="text-gray-400 max-w-[320px] leading-relaxed text-[0.95rem]">
            Crafting responsive and modern web experiences with clean code and creative UI — driven by performance and design precision.
          </p>
        </div>

        {/* 🔹 Middle Section - Links */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-[0.95rem]">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* 🔹 Right Section - Socials */}
        <div className="flex flex-col items-center lg:items-start gap-3">
          <h3 className="text-lg font-semibold text-blue-400">Connect</h3>
          <div className="flex gap-5 mt-1">
            <a
              href="mailto:youremail@example.com"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-blue-900 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ali Official — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
