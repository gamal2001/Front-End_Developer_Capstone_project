import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/Hader.css";
const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to="/">
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button
          type="button"
          className="nav-bar-hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
        <ul
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/under-construction">ABOUT</Link>
          </li>
          <li>
            <Link to="/under-construction">MENU</Link>
          </li>
          <li>
            <Link to="/reservation">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/under-construction">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/under-construction">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
