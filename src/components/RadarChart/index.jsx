import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import Tick from "../../components/RadarTick";
import { ReactComponent as ChartArrow } from "../../assets/carouselArrow.svg";

const coordinates = [
  { x: 395, y: 120 },
  { x: 620, y: 200 },
  { x: 625, y: 380 },
  { x: 495, y: 525 },
  { x: 295, y: 525 },
  { x: 130, y: 380 },
  { x: 160, y: 200 },
];

export default function DevChart({ props }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = props;
  const keys = Object.keys(data);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? keys.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === keys.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="radarChart">
      {" "}
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart outerRadius="54%" data={data[keys[currentIndex]]}>
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
          <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
          <Radar
            dataKey="mastery"
            fill="var(--main-color)"
            fillOpacity={0.7}
            radius={20}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="radarChart__arrows">
        {" "}
        <button className="radarChart__prevRadar" onClick={goToPrev}>
          <ChartArrow />
        </button>
        <button className="radarChart__nextRadar" onClick={goToNext}>
          <ChartArrow />
        </button>
      </div>
    </div>
  );
}
