import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={"/project/" + project.id}>
      <div className="projectCard__block-logo">
        <img
          className="projectCard__logo"
          src={project.logo}
          alt={`Logo of ${project.name}`}
        />
      </div>
    </Link>
  );
}
