export default function ProjectsDisplay(props) {
  return (
    <section
      className={
        props.projectsShown
          ? "project-section project-section-shown"
          : "project-section project-section-hidden"
      }
    >
      <p>Test 1</p>
      <p>Test 2</p>
      <p>Test 3</p>
      <button onClick={props.toggleProjectsShown}>CLIMB BACK</button>
    </section>
  );
}
