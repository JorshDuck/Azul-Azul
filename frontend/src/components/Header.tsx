import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../../public/img/logo-main.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside the header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <header className="header" ref={headerRef}>
      <div className="header__container">
        {/* Logo */}
        <Link to="/main" className="header__logo" onClick={closeMenu}>
          <img src={logo} alt="Azul Azul" className='header__logo-img'/>
        </Link>

        {/* Phone Menu*/}
        <button
          className="header__burger"
          onClick={toggleMenu}
          aria-label="Open Menu"
          aria-expanded={menuOpen}
        >
          <span className={`header__line ${menuOpen ? 'open' : ''}`} />
          <span className={`header__line ${menuOpen ? 'open' : ''}`} />
          <span className={`header__line ${menuOpen ? 'open' : ''}`} />
        </button>

        {/* ===== Navbar =====*/}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <Link to="/main" onClick={closeMenu}>Inicio</Link>
          <Link to="/contacto" onClick={closeMenu}>Eventos</Link>
          <Link to="/contacto" onClick={closeMenu}>Eventos</Link>
          <Link to="/contacto" onClick={closeMenu}>Tour Virtual</Link>
          <Link to="/contacto" onClick={closeMenu}>Contáctanos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;