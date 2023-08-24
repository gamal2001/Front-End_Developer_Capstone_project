import { Link  } from "react-router-dom";
import logoImage from '../assets/logo.png';
import Home from "./Home";
import Reservation from "./Reservation";
import UnderConstructions from "./UnderConstruction";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
          <li>
            <Link to="/under-construction">Under Construction</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};


export default Header;
