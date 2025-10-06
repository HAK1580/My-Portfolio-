import React from "react";


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full mt-20 py-16 px-6 flex flex-col items-center text-white"
    >
      {/* Heading */}
    <h1 className='flex  justify-center items-center  my-10 sm:text-[2.5rem] lg:text-[3.7rem] text-[1.5rem]' >
      Contact Me  </h1>


      {/* Contact Box */}
      <div className="w-full max-w-[700px] bg-[#111827] rounded-2xl shadow-lg border border-blue-800 p-8 sm:p-10">
        <p className="text-center text-[1.05rem] text-gray-300 mb-6">
          Got a project in mind or just want to say hi? Let’s connect!
        </p>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully ✅");
          }}
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="flex-1 p-3 bg-transparent border border-blue-700 rounded-md focus:border-blue-500 text-white placeholder-gray-400 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="flex-1 p-3 bg-transparent border border-blue-700 rounded-md focus:border-blue-500 text-white placeholder-gray-400 outline-none transition"
            />
          </div>

          <textarea
            placeholder="Your Message"
            required
            className="p-3 h-36 bg-transparent border border-blue-700 rounded-md resize-none focus:border-blue-500 text-white placeholder-gray-400 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-semibold transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Links */}
        <div className="flex justify-center gap-8 mt-8">
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
    </section>
  );
};

export default Contact;
