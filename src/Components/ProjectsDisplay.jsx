import projectGemify from "/project_gemify.jpg";
import projectMemorisk from "/project_memorisk.jpg";
import projectRaditext from "/project_raditext.jpg";
import projectEUFlagify from "/project_eu-flagify.jpg";
import projectUnfinished from "/project_unfinished.jpg";
import ladderDark from "/ladder_dark.svg";
import ladderBright from "/ladder_bright.svg";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsDisplay(props) {
  return (
    <section className="project-section">
      <div className="project-cards">
        <ProjectCard
            url={"https://gemify.netlify.app/"}
            projectTitle={"GEMIFY"}
            language={props.language}
            engDescription={"A simple dice game"}
            hunDescription={"Egy egyszerű dobókockás játék"}
            imagePath={projectGemify}
        ></ProjectCard>
        <ProjectCard
            url={"https://memorisk.netlify.app/"}
            projectTitle={"MEMORISK"}
            language={props.language}
            engDescription={"A simple memory game"}
            hunDescription={"Egy egyszerű memóriajáték"}
            imagePath={projectMemorisk}
        ></ProjectCard>
        <ProjectCard
            url={"https://raditext.netlify.app/"}
            projectTitle={"RADITEXT"}
            language={props.language}
            engDescription={"App for counting text"}
            hunDescription={"App szöveg számolásához"}
            imagePath={projectRaditext}
        ></ProjectCard>
        <ProjectCard
            url={"https://eu-flagify.netlify.app/"}
            projectTitle={"EU-FLAGIFY"}
            language={props.language}
            engDescription={"A flag guessing game"}
            hunDescription={"Zászló kitalálós játék"}
            imagePath={projectEUFlagify}
        ></ProjectCard>
          <ProjectCard
              projectTitle={"???"}
              language={props.language}
              engDescription={"Under development"}
              hunDescription={"Fejlesztés alatt"}
              imagePath={projectUnfinished}
          ></ProjectCard>  
      </div>
      <button
        className={props.darkMode ? "button-dark" : "button-bright"}
        onClick={props.scrollUp}
      >
        <img
          className="ladder-image"
          src={props.darkMode ? ladderDark : ladderBright}
          alt="A ladder's icon."
        ></img>
        <p
          className={props.darkMode ? "button-text-dark" : "button-text-bright"}
        >
          {props.language === "english" ? "CLIMB BACK" : "MÁSSZ VISSZA"}
        </p>
        <img
          className="ladder-image"
          src={props.darkMode ? ladderDark : ladderBright}
          alt="A ladder's icon."
        ></img>
      </button>
    </section>
  );
}
