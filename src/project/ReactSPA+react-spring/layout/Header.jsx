function Header(props) {
  return (
    <nav className="container">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React SPA + react-spring
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
          {/* <li>
            <a href="collapsible.html">JavaScript</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export { Header };
