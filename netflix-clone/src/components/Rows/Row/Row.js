// src/components/Rows/Row/Row.js
import React, { useEffect, useState } from "react";
import axiosInstance from "../../Utils/Axios";
import MovieTrailer from "../../MovieTrailer/MovieTrailer"; // 

import "./Row.css";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState(null); // Store current trailer ID

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Handle poster click
  const handleClick = async (movie) => {
    try {
      const trailerResponse = await axiosInstance.get(
        `/movie/${movie.id}/videos?language=en-US`
      );
      const youtubeTrailer = trailerResponse.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      setTrailerId(youtubeTrailer?.key || null);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleClose = () => setTrailerId(null);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.name || movie.title}
            onClick={() => handleClick(movie)} // Make poster clickable
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      {trailerId && <MovieTrailer videoId={trailerId} onClose={handleClose} />}
    </div>
  );
}

export default Row;
