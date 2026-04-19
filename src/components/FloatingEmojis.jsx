import "./FloatingEmojis.css";

export default function FloatingEmojis() {
  const emojis = [
    { id: 1, emoji: "❤️", left: "10%", duration: 8 },
    { id: 2, emoji: "💕", left: "20%", duration: 10 },
    { id: 3, emoji: "💖", left: "30%", duration: 12 },
    { id: 4, emoji: "💗", left: "40%", duration: 9 },
    { id: 5, emoji: "💘", left: "50%", duration: 11 },
    { id: 6, emoji: "💝", left: "60%", duration: 8.5 },
    { id: 7, emoji: "🌹", left: "70%", duration: 10.5 },
    { id: 8, emoji: "✨", left: "80%", duration: 9.5 },
    { id: 9, emoji: "💌", left: "90%", duration: 12.5 },
    { id: 10, emoji: "🎀", left: "15%", duration: 11 },
  ];

  return (
    <div className="floating-emojis-container">
      {emojis.map((item) => (
        <div
          key={item.id}
          className="floating-emoji"
          style={{
            left: item.left,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.id * 0.5}s`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
