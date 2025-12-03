import React from "react";
import YouTube from "react-youtube";
import "./MovieTrailer.css"; // optional styles for overlay

const MovieTrailer = ({ videoId, onClose }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // autoplay the video
    },
  };

  return (
    <div className="trailer-overlay">
      <button onClick={onClose} className="close-btn">
        Close
      </button>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default MovieTrailer;
