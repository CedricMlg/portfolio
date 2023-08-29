import DevChart from "../../components/RadarChart";
import { development, tools } from "../../data/skills.json";
import { devSkills } from "../../data/developmentSkills.json";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    gsap.from(".skillsPage", {
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <main>
      <div className="skillsPage">
        <div className="skillsPage__block-dev">
          <h4 className="skillsPage__dev-title">Development</h4>
          <div className="skillsPage__dev">
            {" "}
            {development.map((element, index) => (
              <div key={index} className="skillsPage__element">
                <img src={element.logo} />
                <p>{element.name}</p>
              </div>
            ))}
          </div>
          <DevChart props={devSkills} />
        </div>
        <div className="skillsPage__block-tools">
          <h4 className="skillsPage__tools-title">Tools</h4>
          <div className="skillsPage__tools">
            {" "}
            {tools.map((element, index) => (
              <div key={index} className="skillsPage__element">
                <img src={element.logo} />
                <p>{element.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
