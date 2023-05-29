import Tick from "../../components/RadarTick";
import { development, tools } from "../../data/skills.json";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const element1 = [
  {
    subject: "Math",
    A: 80,
  },
  {
    subject: "Chinese",
    A: 80,
  },
  {
    subject: "English",
    A: 80,
  },
  {
    subject: "Geography",
    A: 80,
  },
  {
    subject: "Physics",
    A: 80,
  },
  {
    subject: "History",
    A: 80,
  },
  {
    subject: "i",
    A: 80,
  },
];

const coordinates = [
  { x: 395, y: 270 },
  { x: 620, y: 360 },
  { x: 660, y: 565 },
  { x: 510, y: 735 },
  { x: 300, y: 735 },
  { x: 130, y: 565 },
  { x: 200, y: 360 },
];

export default function Skills() {
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
          <div className="skillsPage__chart">
            {" "}
            <ResponsiveContainer width="100%" height="80%">
              <RadarChart outerRadius="54%" data={element1}>
                <PolarGrid stroke="white" radialLines={false} />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={({ payload, index }) => (
                    <>
                      <Tick
                        {...payload}
                        index={index}
                        coordinates={coordinates[index]}
                      />
                    </>
                  )}
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tick={false}
                />
                <Radar
                  dataKey="A"
                  fill="var(--main-color)"
                  fillOpacity={0.7}
                  radius={20}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
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
