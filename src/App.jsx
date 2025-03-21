import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectsDisplay from "./Components/ProjectsDisplay";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("english");

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

  return (
    <>
      <Header
        language={language}
        toggleLanguage={toggleLanguage}
        darkMode={darkMode}
        toggleLightMode={toggleLightMode}
      ></Header>
      <Hero language={language}></Hero>
      <ProjectsDisplay></ProjectsDisplay>
    </>
  );
}

export default App;
