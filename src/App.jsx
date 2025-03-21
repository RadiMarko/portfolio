import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectsDisplay from "./Components/ProjectsDisplay";
import IllustrationsDisplay from "./Components/IllustrationsDisplay";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("english");
  const [projectsShown, setProjectsShown] = useState(false);
  const [illustrationsShown, setIllustrationsShown] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "bright-mode";
  }, [darkMode]);

  useEffect(() => {
    if (projectsShown) {
      const projectSection =
        document.getElementsByClassName("project-section")[0];
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [projectsShown]);

  useEffect(() => {
    if (!projectsShown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [projectsShown]);

  useEffect(() => {
    if (illustrationsShown) {
      const illustrationSection = document.getElementsByClassName(
        "illustration-section"
      )[0];
      if (illustrationSection) {
        illustrationSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [illustrationsShown]);

  useEffect(() => {
    if (!illustrationsShown) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [illustrationsShown]);

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

  function toggleIllustrationsShown() {
    setIllustrationsShown((prevIllustrationsShown) => {
      return !prevIllustrationsShown;
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
        toggleIllustrationsShown={toggleIllustrationsShown}
      ></Header>
      <Hero language={language}></Hero>
      <ProjectsDisplay
        projectsShown={projectsShown}
        toggleProjectsShown={toggleProjectsShown}
        darkMode={darkMode}
        language={language}
      ></ProjectsDisplay>
      <IllustrationsDisplay
        illustrationsShown={illustrationsShown}
        toggleIllustrationsShown={toggleIllustrationsShown}
        darkMode={darkMode}
        language={language}
      ></IllustrationsDisplay>
    </>
  );
}

export default App;
