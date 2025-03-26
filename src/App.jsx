import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectsDisplay from "./Components/ProjectsDisplay";
import IllustrationsDisplay from "./Components/IllustrationsDisplay";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "bright-mode";
  }, [darkMode]);

  function scrollToProjects() {
    const projectSection =
      document.getElementsByClassName("project-section")[0];
    projectSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToIllustrations() {
    const illustrationSection = document.getElementsByClassName(
      "illustration-section"
    )[0];
    illustrationSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleLanguage() {
    setLanguage((prevLanguage) => {
      return prevLanguage === "english" ? "hungarian" : "english";
    });
  }

  function toggleLightMode() {
    setDarkMode((prevDarkMode) => {
      return !prevDarkMode;
    });
  }

  return (
    <>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleLightMode={toggleLightMode}
        scrollToProjects={scrollToProjects}
        scrollToIllustrations={scrollToIllustrations}
      ></Header>
      <Hero language={language} darkMode={darkMode}></Hero>
      <ProjectsDisplay
        scrollUp={scrollUp}
        darkMode={darkMode}
        language={language}
      ></ProjectsDisplay>
      <IllustrationsDisplay
        scrollUp={scrollUp}
        darkMode={darkMode}
        language={language}
      ></IllustrationsDisplay>
    </>
  );
}

export default App;
