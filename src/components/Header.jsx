import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" to="/">
          Discover the Dolomites
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/travelers"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Travelers
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
