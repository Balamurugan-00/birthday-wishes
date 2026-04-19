import { useState, useEffect } from "react";
import "./VideosPage.css";
import FloatingEmojis from "../components/FloatingEmojis";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockVideos = [
      { id: 1, title: "Unaku wishes", description: "wish pandren nu video panni iruken, Paathu sirikatha", duration: "2:30", videoUrl: "/data/video.mp4" },
    ];

    setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <FloatingEmojis />
      <div className="videos-container">
      <div className="page-header">
        <h1 className="page-title">Oru Chinna Video<span className="emoji-icon">🎥</span></h1>
        <p className="page-subtitle">Ithu oru birthday wish video !!! </p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading videos...</p>
        </div>
      ) : (
        <div className="scattered-videos">
          {videos.map((video) => (
            <div key={video.id} className="video-card" onClick={() => setSelectedVideo(video)}>
              <div className="video-thumbnail">
                <div className="play-overlay">
                  <span className="play-text">Play</span>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>✕</button>
            <div className="modal-video">
              <video className="video-player" controls>
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="player-duration">{selectedVideo.duration}</p>
            </div>
            <div className="modal-info">
              <h2 className="modal-title">{selectedVideo.title}</h2>
              <p className="modal-description">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
