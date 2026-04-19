import './WishPage.css';
import FloatingEmojis from '../components/FloatingEmojis';

export default function WishPage() {
  return (
    <>
      <FloatingEmojis />
      <div className="wish-container">
        <div className="confetti"></div>
        
        <div className="wish-content">
          <div className="celebration-emojis top">
            <span className="emoji">🎉</span>
            <span className="emoji">🎈</span>
            <span className="emoji">🎊</span>
          </div>

          <div className="cake-icon">🎂</div>

          <h1 className="wish-name">Priya Dharshini</h1>
          
          <div className="celebration-emojis bottom">
            <span className="emoji">🎉</span>
            <span className="emoji">🎈</span>
            <span className="emoji">🎊</span>
          </div>

          <div className="wish-message">
            <p>Happy Birthday! 🌟</p>
            <p className="sub-message">You deserve all the love and happiness in the world</p>
          </div>

          <div className="floating-elements">
            <div className="float-element">🎂</div>
            <div className="float-element">🎉</div>
            <div className="float-element">🎈</div>
            <div className="float-element">🎊</div>
          </div>
        </div>
      </div>
    </>
  );
}
