import PropTypes from "prop-types";

export default function Project({ project }) {
  Project.propTypes = {
    project: PropTypes.string.isRequired,
  };
  return (
    <div className="project__block-logo">
      <img
        className="project__logo"
        src={project.logo}
        alt={`Logo of ${project.name}`}
      />
    </div>
  );
}
