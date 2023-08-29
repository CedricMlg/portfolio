import WorkComp from "../../components/Work";
import { useEffect } from "react";

export default function Work() {
  useEffect(() => {
    gsap.from(".work", {
      opacity: 0,
      duration: 2,
    });
  }, []);

  return (
    <main>
      {" "}
      <div className="workPage">
        <WorkComp page={true} />
      </div>
    </main>
  );
}
