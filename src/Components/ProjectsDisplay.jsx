import projectGemify from "/project_gemify.jpg";
import projectMemorisk from "/project_memorisk.jpg";
import projectRaditext from "/project_raditext.jpg";
import ladderDark from "/ladder_dark.svg";
import ladderBright from "/ladder_bright.svg";

export default function ProjectsDisplay(props) {
  return (
    <section className="project-section">
      <div className="project-cards">
        <a
          className="project-card"
          href="https://gemify.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>GEMIFY</h2>
          <p className="project-description">
            {props.language === "english"
              ? "A simple dice game"
              : "Egy egyszerű dobókockás játék"}
          </p>
          <img
            className="project-image"
            src={projectGemify}
            alt="Screenshot of a project's page."
          ></img>
        </a>
        <a
          className="project-card"
          href="https://memorisk.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>MEMORISK</h2>
          <p className="project-description">
            {props.language === "english"
              ? "A simple memory game"
              : "Egy egyszerű memóriajáték"}
          </p>
          <img
            className="project-image"
            src={projectMemorisk}
            alt="Screenshot of a project's page."
          ></img>
        </a>
        <a
          className="project-card"
          href="https://raditext.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>RADITEXT</h2>
          <p className="project-description">
            {props.language === "english"
              ? "App for counting text"
              : "App szöveg számolásához"}
          </p>
          <img
            className="project-image"
            src={projectRaditext}
            alt="Screenshot of a project's page."
          ></img>
        </a>
      </div>
      <button
        className={props.darkMode ? "button-dark" : "button-bright"}
        onClick={props.toggleProjectsShown}
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
