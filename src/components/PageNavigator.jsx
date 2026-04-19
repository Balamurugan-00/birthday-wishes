import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import './PageNavigator.css';

export default function PageNavigator() {
  const location = useLocation();
  const navigate = useNavigate();
  const countdownState = useContext(CountdownContext);

  const pages = [
    { path: '/', icon: '⏰', label: 'Countdown' },
    { path: '/my-wish', icon: '💌', label: 'My Wish', locked: true },
    { path: '/photos', icon: '📸', label: 'Photos', locked: true },
    { path: '/videos', icon: '🎬', label: 'Videos', locked: true },
    { path: '/voice', icon: '🎤', label: 'Voice', locked: true },
    { path: '/thank-you', icon: '🙏', label: 'Thank You', locked: true },
  ];

  const currentIndex = pages.findIndex((p) => p.path === location.pathname);
  const isPageLocked = (page) => page.locked && !countdownState.isComplete;

  return (
    <div className="page-navigator">
      <div className="navigator-container">
        {pages.map((page, index) => {
          if (page.hidden) return null;
          
          return (
            <button
              key={page.path}
              className={`nav-dot ${currentIndex === index ? 'active' : ''} ${isPageLocked(page) ? 'locked' : ''}`}
              onClick={() => !isPageLocked(page) && navigate(page.path)}
              title={isPageLocked(page) ? 'Locked until countdown ends' : page.label}
              disabled={isPageLocked(page)}
              style={{
                '--delay': `${index * 0.1}s`,
              }}
            >
              <span className="dot-icon">{page.icon}</span>
              <span className="dot-label">{page.label}</span>
            </button>
          );
        })}
      </div>
      <div className="progress-indicator">
        <div 
          className="progress-bar"
          style={{
            width: `${((currentIndex + 1) / pages.filter(p => !p.hidden).length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
