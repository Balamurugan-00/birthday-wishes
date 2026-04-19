import { useState, useEffect } from "react";
import "./PhotosPage.css";
import FloatingEmojis from "../components/FloatingEmojis";

export default function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  // Function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const loadPhotos = () => {
      const photoFiles = [
        'img (1).jpg',
        'img (2).jpg',
        'img (3).jpg',
        'img (4).jpg',
        'img (5).jpg',
        'img (6).jpg',
        'img (7).jpg',
        'img (8).jpg',
        'img (9).jpg',
        'img (10).jpg',
        'img (11).jpg',
        'img (12).jpg',
        'img (13).jpg',
        'img (14).jpg',
        'img (15).jpg',
        'img (16).jpg',
        'img (17).jpg',
        'img (18).jpg',
        'img (19).jpg',
        'img (20).jpg',
        'img (21).jpg',
        'img (22).jpg',
        'img (23).jpg',
        'img (24).jpg',
        'img (26).jpg',
        'img (27).jpg',
        'img (28).jpg',
        'img (29).jpg',
        'img (30).jpg',
        'img (31).jpg',
        'img (32).jpg',
        'img (33).jpg',
        'img (34).jpg',
        'img (35).jpg',
        'img (36).jpg',
        'img (37).jpg',
        'img (38).jpg',
        'img (39).jpg',
        'img (40).jpg',
        'img (41).jpg',
        'img (42).jpg',
        'img (43).jpg',
        'img (44).jpg',
      ];

      const photoArray = photoFiles.map((fileName, index) => ({
        id: index + 1,
        src: `/data/${fileName}`,
        rotation: Math.random() * 12 - 6,
        delay: Math.random() * 0.3,
      }));

      const shuffledPhotos = shuffleArray(photoArray);

      setTimeout(() => {
        setPhotos(shuffledPhotos);
        setLoading(false);
      }, 300);
    };

    loadPhotos();
  }, []);

  return (
    <>
      <FloatingEmojis />
      <div className="photos-container">
      <div className="page-header">
        <h1 className="page-title">Azhagi<span className="emoji-icon">📷</span></h1>
        <p className="page-subtitle">Beautiful moments I remember </p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loader"></div>
          <p>Loading memories...</p>
        </div>
      ) : (
        <div className="scattered-photos">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`photo-polaroid ${hoveredId === photo.id ? 'hovered' : ''}`}
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                animationDelay: `${photo.delay}s`,
              }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="polaroid-frame">
                <div className="polaroid-img-wrapper">
                  <img 
                    src={photo.src} 
                    alt={`Memory ${photo.id}`}
                    className="polaroid-img"
                    onError={(e) => {
                      e.target.src = "data:IMG/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect fill='%23f0f0f0' width='300' height='300'/%3E%3Ctext x='50%' y='50%' text-anchor='middle' dy='.3em' fill='%23999' font-family='sans-serif' font-size='18'%3EPhoto%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="polaroid-footer"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
