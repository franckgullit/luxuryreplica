import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header" ref={menuRef}>
      {/* Top Bar */}
      <div className="header__top">
        <span>24/7 Customer service · watchexpressions2000@gmail.com</span>
      </div>

      {/* Main Header */}
      <div className="header__main">
        {/* Logo */}
        <NavLink to="/" className="header__logo">
          WATCH EXPRESSIONS
        </NavLink>

        {/* Desktop Navigation */}
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <a
            href="https://wa.me/15852822451?text=Hello%20I%20have%20a%20question%20about%20a%20watch"
            target="_blank"
            rel="noreferrer"
            className="header__whatsapp"
          >
            Chat on WhatsApp
          </a>

          <div className="header__search">
            <input type="text" placeholder="Search" />
            <span className="header__search-icon">🔍</span>
          </div>

          <div className="header__cart">
            🛒
            <span className="snipcart-items-count"></span>
          </div>


          {/* Hamburger */}
          <button
            className={`header__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
