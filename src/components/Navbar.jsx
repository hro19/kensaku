import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Topページへのリンク */}
            <Link to="/">Top</Link>
          </li>
          <li>
            {/* Contactページへのリンク */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
