import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import logo from "../../assets/logo.png";

export default function Header() {
  function GoTop() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      <div className="header">
        <Link onClick={GoTop} to={"/"}>
          <img className="header__logo" src={logo} alt=""></img>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-app">
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/skills"}>My skills</Link>
            </li>
            <li>
              <Link to={"/work"}>Work</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className="header__nav">
          <ul className="header__nav-socials">
            <li className="socials">
              <Github />
            </li>
            <li className="socials">
              <LinkedIn />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
