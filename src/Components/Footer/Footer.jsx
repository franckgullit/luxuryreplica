import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copy">
          © 2025 Replica Watches. Experience Luxury Without Compromise.
        </p>

        <nav className="footer__links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
