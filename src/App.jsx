import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectsDisplay from "./Components/ProjectsDisplay";
import IllustrationsDisplay from "./Components/IllustrationsDisplay";
import ladderDark from "/ladder_dark.svg";
import ladderBright from "/ladder_bright.svg";

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
    <div className="app">
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
      <div className="query-button-line">
        <button
          className={darkMode ? "query-button-dark" : "query-button-bright"}
          onClick={scrollUp}
        >
          <img
            className="ladder-image"
            src={darkMode ? ladderDark : ladderBright}
            alt="A ladder's icon."
          ></img>
          <p
            className={
              darkMode ? "query-button-text-dark" : "query-button-text-bright"
            }
          >
            {language === "english" ? "CLIMB BACK" : "MÁSSZ VISSZA"}
          </p>
          <img
            className="ladder-image"
            src={darkMode ? ladderDark : ladderBright}
            alt="A ladder's icon."
          ></img>
        </button>
      </div>
    </div>
  );
}

export default App;
