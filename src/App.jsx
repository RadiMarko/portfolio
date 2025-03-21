import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectsDisplay from "./Components/ProjectsDisplay";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("english");
  const [projectsShown, setProjectsShown] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "bright-mode";
  }, [darkMode]);

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

  function toggleProjectsShown() {
    setProjectsShown((prevProjectsShown) => {
      return !prevProjectsShown;
    });
  }

  return (
    <>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleLightMode={toggleLightMode}
        toggleProjectsShown={toggleProjectsShown}
      ></Header>
      <Hero language={language}></Hero>
      <ProjectsDisplay projectsShown={projectsShown}></ProjectsDisplay>
    </>
  );
}

export default App;
