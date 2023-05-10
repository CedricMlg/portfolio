import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";

export default function Project() {
  let { id } = useParams();
  const array = projects.filter((project) => project.id === id);
  const project = array[0];

  return <div className="project">index</div>;
}
