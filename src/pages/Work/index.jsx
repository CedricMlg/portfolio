import { useEffect } from "react";
import WorkComp from "../../components/Work";

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
