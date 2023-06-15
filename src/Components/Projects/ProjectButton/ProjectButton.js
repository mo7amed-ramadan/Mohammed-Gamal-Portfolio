import "./ProjectButton.css";

function ProjectButton(props) {
  return (
    <>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="project-button d-flex align-items-center justify-content-center "
      >
        <span className="project-title">{props.name}</span>
      </a>
    </>
  );
}

export default ProjectButton;
