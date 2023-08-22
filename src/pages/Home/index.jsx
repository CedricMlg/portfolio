import About from "../../components/About";
import Contact from "../../components/Contact";
import Work from "../../components/Work";
import MainButton from "../../components/MainButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const mainTimeline = gsap.timeline();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  useEffect(() => {
    mainTimeline
      .from(".home__name h1 span", {
        opacity: 0,
        xPercent: -70,
        duration: 1.3,
        ease: Power1.easeOut,
        stagger: {
          each: 0.9,
        },
      })
      .set(".home__job-bar", {
        opacity: 1,
      })
      .to(
        ".home__job-letter",
        {
          display: "inline",
          stagger: {
            each: 0.12,
          },
        },
        "+=0.5"
      )
      .set(
        ".home__job-bar",
        {
          opacity: 0,
        },
        "+=0.6"
      )
      .set(
        ".home__job-bar",
        {
          opacity: 1,
        },
        "+=0.6"
      )
      .set(
        ".home__job-bar",
        {
          opacity: 0,
        },
        "+=0.6"
      )
      .set(
        ".home__job-bar",
        {
          opacity: 1,
        },
        "+=0.6"
      )
      .set(
        ".home__job-bar",
        {
          opacity: 0,
        },
        "+=0.6"
      )
      .from(".home__block-bottom h3", {
        opacity: 0,
        xPercent: -70,
        duration: 1.3,
      })
      .from(
        ".main-button",
        {
          opacity: 0,
          duration: 1.3,
        },
        "<"
      );
  }, []);

  return (
    <main>
      <div className="home">
        <div className="home__name">
          <h1>
            <span>Cédric</span>&nbsp;<span>Malingre</span>
          </h1>
        </div>
        <div className="home__block-bottom">
          <div className="home__job">
            <h2>
              <span className="home__job-letter">F</span>
              <span className="home__job-letter">r</span>
              <span className="home__job-letter">o</span>
              <span className="home__job-letter">n</span>
              <span className="home__job-letter">t</span>
              <span className="home__job-letter">-</span>
              <span className="home__job-letter">E</span>
              <span className="home__job-letter">n</span>
              <span className="home__job-letter">d</span>{" "}
              <span className="home__job-letter">D</span>
              <span className="home__job-letter">e</span>
              <span className="home__job-letter">v</span>
              <span className="home__job-letter">e</span>
              <span className="home__job-letter">l</span>
              <span className="home__job-letter">o</span>
              <span className="home__job-letter">p</span>
              <span className="home__job-letter">e</span>
              <span className="home__job-letter">r</span>
              <span className="home__job-bar">|</span>
            </h2>
            <h3>Knowledge Seeker</h3>
          </div>
          <MainButton
            props={{ text: "Let's", hidden: "talk", type: "button" }}
            handleClick={routeChange}
          />
        </div>
      </div>
      <About page={false} />
      <Work page={false} />
      <Contact />
    </main>
  );
}
