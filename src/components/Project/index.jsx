import PropTypes from "prop-types";

export default function Project({ project }) {
  Project.propTypes = {
    project: PropTypes.string.isRequired,
  };
  return <img className="project__logo" src={project.logo} alt={`Logo of ${project.name}`} />;
}
