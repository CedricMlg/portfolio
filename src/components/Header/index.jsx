import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header">
        <img className="header__logo" src={logo} alt=""></img>
        <nav className="header__nav">
          <ul className="header__nav-app">
            <li>About</li>
            <li>My skills</li>
            <li>Work</li>
            <li>Contact</li>
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
