import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="gradient-text">💕 Birthday Wishes</span>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Countdown
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/my-wish"
              className={`nav-link ${isActive('/my-wish') ? 'active' : ''}`}
            >
              My Wish
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/photos"
              className={`nav-link ${isActive('/photos') ? 'active' : ''}`}
            >
              Photos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/videos"
              className={`nav-link ${isActive('/videos') ? 'active' : ''}`}
            >
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/voice"
              className={`nav-link ${isActive('/voice') ? 'active' : ''}`}
            >
              Voice
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/thank-you"
              className={`nav-link ${isActive('/thank-you') ? 'active' : ''}`}
            >
              Thank You
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
