import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" to="/" onClick={closeMenu}>
          Discover the Dolomites
        </Link>

        <button
          className={isMenuOpen ? 'menu-toggle open' : 'menu-toggle'}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={isMenuOpen ? 'nav-links open' : 'nav-links'}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/travelers"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={closeMenu}
          >
            Travelers
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
