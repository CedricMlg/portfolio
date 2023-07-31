import About from "../../components/About";
import Contact from "../../components/Contact";
import Work from "../../components/Work";
import MainButton from "../../components/MainButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
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
          <MainButton props={{text:"Let's", hidden:"talk", type:"button"}} handleClick={routeChange}/>
        </div>
      </div>
      <About page={false} />
      <Work page={false} />
      <Contact />
    </main>
  );
}
