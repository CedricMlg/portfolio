export default function About({ page }) {
  return (
    <div className="about">
      <h4 className="about__title">
        Who am <span>I ?</span>
      </h4>
      <div className="about__block-description">
        {" "}
        <p className="about__description">
          I&apos;m a Front-End <span>Developer</span> living in France.{" "}
          <span>I love building web sites</span>, I have a passion for beautiful
          designs.
        </p>
        <p className="about__description">
          Independent, <span>determined</span>, resilient with{" "}
          <span>attention to details</span>, I&apos;m focused on delivering{" "}
          <span>good work</span>.
        </p>
        <p className="about__description">
          Passionate about <span>video games</span>, <span>sport</span> enjoyer,
          I like to <span>hang out</span> with my friends and the peoples I work
          with.
        </p>
        {page ? (
          <p className="about__description">
            My <span>dream job</span> is a job where I can live off my{" "}
            <span>passion</span> for development and work in a{" "}
            <span>good atmosphere</span> with colleagues I like.
          </p>
        ) : (
          ""
        )}
      </div>
      {page ? (
        ""
      ) : (
        <h4 className="about__skills">
          My <span>skills</span>
        </h4>
      )}
    </div>
  );
}
