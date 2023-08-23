import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects.json";

export default function Work({ page }) {

  return (
    <div className="work">
      {page ? (
        ""
      ) : (
        <h4 className="work__title">
          My <span>work</span>
        </h4>
      )}
      <div className="work__projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
