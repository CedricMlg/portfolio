import Project from "../Project";
import { projects } from "../../data/projects.json";

export default function Work() {
  return (
    <div className="work">
      <h4 className="work__title">
        My <span>work</span>
      </h4>
      <div className="work__projects">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
