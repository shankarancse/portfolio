import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import LearningJourney from "./components/LearningJourney.jsx";
import GithubSection from "./components/GithubSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useTheme from "./hooks/useTheme.js";
import useReveal from "./hooks/useReveal.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  useEffect(() => {
    document.title = "R. Shankaran | Python Developer & CSE Student";
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <LearningJourney />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
