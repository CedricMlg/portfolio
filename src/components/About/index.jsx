import Modal from "react-modal";
import SkillToSpan from "../SkillToSpan";
import { useState } from "react";

Modal.setAppElement("#root");

export default function About({ page }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      padding: "0",
      overflow: "visible",
      width: "fit-content",
      height: "fit-content",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      inset: "50% 40px 60px 50%",
      backgroundColor: "transparent",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="about">
      <h4 className="about__title">
        Who am <span>I ?</span>
      </h4>
      <div className="about__block-description">
        {" "}
        <p className="about__description">
          I&apos;m a Front-End <span>Developer</span> living in France.{" "}
          <span>I love building web sites</span>, I have a passion for beautiful
          designs.
        </p>
        <p className="about__description">
          Independent, <span>determined</span>, resilient with{" "}
          <span>attention to details</span>, I&apos;m focused on delivering{" "}
          <span>good work</span>.
        </p>
        <p className="about__description">
          Passionate about <span>video games</span>, <span>sport</span> enjoyer,
          I like to <span>hang out</span> with my friends and the peoples I work
          with.
        </p>
        {page ? (
          <p className="about__description">
            My <span>dream job</span> is a job where I can live off my{" "}
            <span>passion</span> for development and work in a{" "}
            <span>good atmosphere</span> with colleagues I like.
          </p>
        ) : (
          ""
        )}
      </div>
      {page ? (
        ""
      ) : (
        <h4 onClick={openModal} className="about__skills">
          My
          <span> skills</span>
        </h4>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal__skill">
          <p>
            {[..."React"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
        <div className="modal__skill">
          {" "}
          <p>
            {[..."JavaScript"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
        <div className="modal__skill">
          {" "}
          <p>
            {[..."SASS"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
        <div className="modal__title">
          <p>
            My <span> skills</span>
          </p>
        </div>
        <div className="modal__skill">
          {" "}
          <p>
            {[..."CSS"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
        <div className="modal__skill">
          {" "}
          <p>
            {[..."HTML"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
        <div className="modal__skill">
          {" "}
          <p>
            {[..."GreenSock"].map((letter, index) => (
              <SkillToSpan key={index} props={letter} />
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
}
