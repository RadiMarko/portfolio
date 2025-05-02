export default function ProjectCard(props) {
    return (
        <a
            className="project-card"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>{props.projectTitle}</h2>
            <p className="project-description">
                {props.language === "english"
                    ? `${props.engDescription}`
                    : `${props.hunDescription}`}
            </p>
            <img
                className="project-image"
                src={props.imagePath}
                alt="Screenshot of a project's page."
            ></img>
        </a>
    )
}