import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          React SPA + react-spring
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/DopPoin">DopPoin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
