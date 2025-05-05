import { Link } from "react-router-dom";
import "../styles/HeaderFooter.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/my-city">My City</Link></li>
          <li><Link to="/my-future">My Future</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
