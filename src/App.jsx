import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollHandler({ sections }) {
  const location = useLocation();

  useEffect(() => {
    const section = sections[location.pathname];
    if (section?.current) {
      section.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location, sections]);

  return null;
}

function App() {
  const [hamopen, setHamopen] = useState(false);

  // 🔹 Create refs for sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  // 🔹 Section map
  const sections = {
    "/hero": heroRef,
    "/about": aboutRef,
    "/skills": skillsRef,
    "/projects": projectsRef,
    "/contact": contactRef,
    "/footer": footerRef,
    "/": heroRef, // default route scrolls to top
  };

  // 🔹 Disable scroll when hamburger is open
  useEffect(() => {
    document.body.style.overflow = hamopen ? "hidden" : "";
  }, [hamopen]);

  // 🔹 Close hamburger on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".ham-img")) {
        setHamopen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <Router>
      <Navbar hamopen={hamopen} setHamopen={setHamopen} />

      {/* Handles smooth scrolling on route change */}
      <ScrollHandler sections={sections} />

      <div className="flex flex-col">
        <section ref={heroRef}><Hero /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactRef}><Contact /></section>
        <section ref={footerRef}><Footer /></section>
      </div>

      {/* Dummy routes so Router doesn't break */}
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/hero" element={<></>} />
        <Route path="/about" element={<></>} />
        <Route path="/skills" element={<></>} />
        <Route path="/projects" element={<></>} />
        <Route path="/contact" element={<></>} />
        <Route path="/footer" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
