export default function ProjectsDisplay(props) {
  return (
    <section
      className={
        props.projectsShown ? "project-section-shown" : "project-section-hidden"
      }
    >
      <p>Test 1</p>
      <p>Test 2</p>
      <p>Test 3</p>
    </section>
  );
}
