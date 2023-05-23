import { useState } from "react";
import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as GithubPages } from "../../assets/githubpages.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { ReactComponent as Cross } from "../../assets/cross.svg";
import Carousel from "../../components/Carousel";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Project() {
  let { id } = useParams();
  const array = projects.filter((project) => project.id === id);
  const project = array[0];
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      padding: "0",
      overflow: "visible",
      width: "fit-content",
      left: "50%",
      transform: "translate(-50%, 0)",
      border: "none",
      inset: "40px 40px 60px 50%",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <main>
      <div className="projectPage">
        <div className="projectPage__block-left">
          <h4 className="projectPage__title">{project.name}</h4>
          <div className="projectPage__block-ds">
            {" "}
            <div className="projectPage__block-description">
              <h5>
                <span>Project</span> description
              </h5>
              <p className="projectPage__description">{project.description}</p>
            </div>
            <div className="projectPage__block-skills">
              <h5>
                Used <span>skills</span>
              </h5>
              <div className="projectPage__usedSkills">
                {" "}
                {project.skills.map((skill, index) => (
                  <div key={index} className="projectPage__skill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="projectPage__block-right">
          <div className="projectPage__block-presentation">
            <h5 className="projectPage__presentation">Presentation</h5>
          </div>
          <div
            className="projectPage__picture"
            onClick={openModal}
            style={{
              backgroundImage: `url(${project.pictures[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="projectPage__block-check">
            {" "}
            {project.live.length === 0 ? (
              ""
            ) : (
              <a
                href={project.live}
                target="_blank"
                className="projectPage__check"
              >
                <GithubPages />
                <p className="projectPage__check-text">Check it live</p>
                <Arrow />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              className="projectPage__check"
            >
              <Github />
              <p className="projectPage__check-text">Check GitHub</p>
              <Arrow />
            </a>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button
            type="button"
            title="Close modal"
            className="close-modal"
            onClick={closeModal}
          >
            <Cross />
          </button>
          <Carousel props={project.pictures} />
        </Modal>
      </div>
    </main>
  );
}
