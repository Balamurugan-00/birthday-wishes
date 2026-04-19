import { useState, useEffect, useRef } from 'react';
import './WishBoard.css';

export default function WishBoard() {
  const [counter, setCounter] = useState(() => {
    const saved = localStorage.getItem('birthdayCounter');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showConfetti, setShowConfetti] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('birthdayCounter', counter.toString());
  }, [counter]);

  const celebrationEmojis = ['🎉', '🎊', '⭐', '🔥', '🎂', '✨', '💫', '🌟'];

  const triggerConfetti = () => {
    setShowConfetti(true);
    
    // Create confetti elements
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.fontSize = (Math.random() * 20 + 20) + 'px';
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      containerRef.current?.appendChild(confetti);
    }

    setTimeout(() => {
      const pieces = containerRef.current?.querySelectorAll('.confetti-piece');
      pieces?.forEach((piece) => piece.remove());
      setShowConfetti(false);
    }, 3000);
  };

  const handleIncrease = () => {
    setCounter(counter + 1);
    triggerConfetti();
  };

  const resetCounter = () => {
    if (window.confirm('Are you sure you want to reset the counter?')) {
      setCounter(0);
      localStorage.setItem('birthdayCounter', '0');
    }
  };

  return (
    <div className="wish-board-container page-container" ref={containerRef}>
      <h1 className="page-title">
        <span className="gradient-text">🎉 Celebration Counter 🎉</span>
      </h1>
      <p className="page-subtitle">Keep track of special moments</p>

      <div className="counter-card">
        <div className="counter-display">
          <div className="counter-number">{counter}</div>
          <div className="counter-label">Celebrations</div>
        </div>

        <div className="celebration-buttons">
          <button className="btn-increase button-glow" onClick={handleIncrease}>
            ➕ Add Celebration
          </button>
          <button className="btn-reset" onClick={resetCounter}>
            🔄 Reset
          </button>
        </div>

        <div className="celebration-emojis">
          {celebrationEmojis.map((emoji, index) => (
            <span key={index} className="emoji-icon" style={{ animationDelay: `${index * 0.1}s` }}>
              {emoji}
            </span>
          ))}
        </div>

        <div className="counter-info">
          <p className="info-text">
            ✨ Every time you click "Add Celebration", this counter will increase and confetti will burst!
          </p>
          <p className="info-text">
            💾 Your count is saved forever in your browser - it will never be lost!
          </p>
        </div>
      </div>
    </div>
  );
}
