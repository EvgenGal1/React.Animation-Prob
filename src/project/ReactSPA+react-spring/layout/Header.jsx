import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/DopPoin">DopPoin</NavLink>
          </li>
          <li>
            <NavLink to="/ReactTransitionGroup">ReactTransitionGroup</NavLink>
            {/* <p>здесь</p> */}
            <ul>
              <li>
                <NavLink to="Prob">Prob</NavLink>
              </li>
              <li>
                <NavLink to="/Prob2">Prob2</NavLink>
              </li>

            </ul>
          </li>
          {/* <li>
            <NavLink to="../../ReactTransitionGroup/ReactTransitionGroup">
              ReactTransitionGroup
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export { Header };
