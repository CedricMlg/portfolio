import { projects } from "../../data/projects.json";
import { useParams } from "react-router-dom";

export default function Project() {
  let { id } = useParams();
  const project = projects.filter((project) => project.id === id);

  return <div>index</div>;
}
