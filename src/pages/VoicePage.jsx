import { useState, useEffect } from "react";
import "./VoicePage.css";
import FloatingEmojis from "../components/FloatingEmojis";

export default function VoicePage() {
  const [voiceMessages, setVoiceMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockMessages = [
      {
        id: 1,
        title: "A Little note with luv ",
        description: "Recorded with all my love for you",
        src: "/data/speech.m4a",
      },
      {
        id: 1,
        title: "Nee enn voice la kekanum nu nenacha song  ",
        description: "lyrics thappa irukum 😅 speed and flow",
        src: "/data/song 2.m4a",
      },
       {
        id: 1,
        title: "Ithu same song with original singer voice and Me ",
        description: "ihtulaium lyrics thappa irukum 😅 speed and flow",
        src: "/data/song 1.m4a",
      },
    ];
    

    setTimeout(() => {
      setVoiceMessages(mockMessages);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <FloatingEmojis />
      <div className="voice-container">
      <div className="page-header">
        <h1 className="page-title">Unakaga Oru Voice Note<span className="emoji-icon">🎙️</span></h1>
        <p className="page-subtitle">Listen to my heart speaking</p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading voice messages...</p>
        </div>
      ) : (
        <div className="scattered-voice">
          {voiceMessages.map((message) => (
            <div key={message.id} className="voice-card">
              <div className="message-header">
                <h3 className="message-title">{message.title}</h3>
                <p className="message-description">{message.description}</p>
              </div>
              <div className="audio-player">
                <audio
                  className="audio-element"
                  controls
                  preload="metadata"
                  src={message.src}
                />
                <span className="duration">{message.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
