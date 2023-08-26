import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/Footer.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logoWhiteImage from "../assets/logo-white.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h4>Sitemap</h4>
          <ul>
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
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> 1234 Street Name, City
              Name, US
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 1234-567-89
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> contact@littlelemon.com
            </p>
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Connect with us</h4>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon target="_blank" icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon target="_blank" icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon target="_blank" icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon target="_blank" icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
