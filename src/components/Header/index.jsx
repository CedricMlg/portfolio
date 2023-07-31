import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  function GoTop() {
    window.scrollTo(0, 0);
  }

  return (
    <header>
      <div className="header">
        <Link onClick={GoTop} to={"/"}>
          <Logo className="header__logo" />
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
              <a href="https://github.com/CedricMlg" target="_blank">
                <Github />
              </a>
            </li>
            <li className="socials">
              <a
                href="https://www.linkedin.com/in/c%C3%A9dric-malingre-7a1a9821a/"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
