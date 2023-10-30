import { useEffect } from "react";
import AboutComp from "../../components/About";

export default function About() {
  const mainTimeline = gsap.timeline();

  useEffect(() => {
    mainTimeline
      .from(".about__title", {
        opacity: 0,
        ease: Power1.easeOut,
        yPercent: -70,
        duration: .8,
      })
      .from(".about__description", {
        opacity: 0,
        ease: Power1.easeOut,
        duration: 1,
        stagger: {
          each: 0.7,
        },
      });
  }, []);

  return (
    <main>
      {" "}
      <div className="aboutPage">
        <AboutComp page={true} />
      </div>
    </main>
  );
}
