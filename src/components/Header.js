import { NavLink }from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink
            to="/"
            style={{ textDecoration: "none"}}
            className={(nav) => (nav.isActive ? "nav-active" : "s")}
          >
            <li className="logo">iStocks</li>
          </NavLink>
          <NavLink
            to="/about"
            style={{ textDecoration: "none"}}
            className={(nav) => (nav.isActive ? "nav-active" : "s")}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/stocks"
            style={{ textDecoration: "none"}}
            className={(nav) => (nav.isActive ? "nav-active" : "s")}
          >
            <li>Stocks</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Header