import './LockedPage.css';
import FloatingEmojis from './FloatingEmojis';

export default function LockedPage() {
  return (
    <>
      <FloatingEmojis />
      <div className="locked-container">
        <div className="lock-icon">🔒</div>
        <h1 className="locked-title">Oops! This page is locked</h1>
        <p className="locked-message">U can only open after countdown ends</p>
        <div className="lock-animation"></div>
      </div>
    </>
  );
}
