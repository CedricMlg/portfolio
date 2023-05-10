import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default function Project() {
  let { id } = useParams();
  const array = projects.filter((project) => project.id === id);
  const project = array[0];

  return (
    <div className="project">
      <div className="project__block-left">
        <h4 className="project__title">{project.name}</h4>
        <p className="project__description">{project.description}</p>
        {project.skills.map((skill) => (
          <div className="project__used-skills">{skill}</div>
        ))}
      </div>
      <div className="project__block-right">
        <h5 className="project__presentation">Presentation</h5>
        <img
          src={project.pictures[0]}
          alt="Project image"
          className="project__picture"
        />
        <div className="project__block-check">
          {" "}
          <a className="project__check">
            <p className="project__check-text">Check it live</p>
            <Arrow />
          </a>
          <a className="project__check">
            <Github />
            <p className="project__check-text">Check GitHub</p>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
