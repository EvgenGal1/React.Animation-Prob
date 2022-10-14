import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">
          {/* React SPA + react-spring */}
          React Animation
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/DopPoin">DopPoin</Link>
          </li>
          <li>
            <Link to="/ReactTransitionGroup">ReactTransitionGroup</Link>
          </li>
          <li>
            <Link to="Prob">Prob</Link>
          </li>
          <li>
            <Link to="/Prob2">Prob2</Link>
          </li>
          {/* <li>
            <Link to="../../ReactTransitionGroup/ReactTransitionGroup">
              ReactTransitionGroup
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export { Header };
