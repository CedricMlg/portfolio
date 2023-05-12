import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as GithubPages } from "../../assets/githubpages.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export default function Project() {
  let { id } = useParams();
  const array = projects.filter((project) => project.id === id);
  const project = array[0];
  console.log(project.live.length);

  return (
    <main>
      <div className="project">
        <div className="project__block-left">
          <h4 className="project__title">{project.name}</h4>
          <div className="project__block-ds">
            {" "}
            <div className="project__block-description">
              <h5>
                <span>Project</span> description
              </h5>
              <p className="project__description">{project.description}</p>
            </div>
            <div className="project__block-skills">
              <h5>
                Used <span>skills</span>
              </h5>
              <div className="project__usedSkills">
                {" "}
                {project.skills.map((skill, index) => (
                  <div key={index} className="project__skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="project__block-right">
          <div className="project__block-presentation">
            <h5 className="project__presentation">Presentation</h5>
          </div>
          <div
            className="project__picture"
            style={{
              backgroundImage: `url(${project.pictures[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="project__block-check">
            {" "}
            {project.live.length === 0 ? (
              ""
            ) : (
              <a href={project.live} target="_blank" className="project__check">
                <GithubPages />
                <p className="project__check-text">Check it live</p>
                <Arrow />
              </a>
            )}
            <a href={project.github} target="_blank" className="project__check">
              <Github />
              <p className="project__check-text">Check GitHub</p>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
