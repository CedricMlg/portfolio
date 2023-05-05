import About from "../../components/About";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Work from "../../components/Work";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="home">
          <div className="home__name">
            <h1>Cédric Malingre</h1>
          </div>
          <div className="home__block-bottom">
            <div className="home__job">
              <h2>Web developer</h2>
              <h3>Front-End Developer</h3>
            </div>
            <button className="home__contact" type="button">
              Let&apos;s talk
            </button>
          </div>
        </div>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
