import "./ThankYouPage.css";
import FloatingEmojis from "../components/FloatingEmojis";

export default function ThankYouPage() {
  return (
    <>
      <FloatingEmojis />
      <div className="thank-you-container">
      <div className="page-header">
        <h1 className="page-title">Thank You Mahh<span className="emoji-icon">🙏</span></h1>
      </div>

      <div className="thank-you-content">
        <p className="main-message">Thank you for being in my life</p>

        <div className="reasons">
          
          
          <div className="reason-card">
            <h3>For Your supprt</h3>
            <p>I have been facing lots of confusions, you came as a falling star to suport me which is saved me</p>
          </div>
          <div className="reason-card">
            <h3>For Your Beautiful Smile</h3>
            <p>I know ur insecured to laugh, I'm damn sure that u will never feel those insecurities with me </p>
          </div>
          <div className="reason-card">
            <h3>For Your Love</h3>
            <p>I never been loved this much before. u have showed me how it feels to be loved like this  </p>
          </div>
          <div className="reason-card">
            <h3>For Your Presence</h3>
            <p>That makes everything feel complete</p>
          </div>
          <div className="reason-card">
            <h3>For Listening</h3>
            <p>Even when I don''t have the right words</p>
          </div>
          <div className="reason-card">
            <h3>For Inspiring Me</h3>
            <p>To become the best version of myself</p>
          </div>
          <div className="reason-card">
            <h3>For Being There</h3>
            <p>Through the ups and downs, happie and sad days & so onnnnnn</p>
          </div>
          <div className="reason-card">
            <h3>For Your Strength</h3>
            <p>That gives me hope in difficult times</p>
          </div>
          <div className="reason-card">
            <h3>For The Magic</h3>
            <p>You bring into my ordinary life, to turn that into a world full of joy</p>
          </div>
        </div>

        <div className="closing-message">
          <p className="closing-text">We gonna create lots of memory together.At a particular point in our elderly life we will say those days and starts to laugh about the good times </p>
          <p className="closing-text">Thank you for choosing me, for staying with me,</p>
          <p className="closing-text final-text">and for being my forever.</p>
        </div>

        <div className="signature">
          <p className="sign-off">With All My Love,</p>
          <p className="signature-text">Forever Your</p>
          <p className="signature-sub-styled">~Bala murugan</p>
        </div>
      </div>
      </div>
    </>
  );
}
