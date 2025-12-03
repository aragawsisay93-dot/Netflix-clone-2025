// src/components/Banner/Banner.jsx
import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/Axios"; 
import Requests from "../Utils/Requests"; 
import "./Banner.css";
;

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axiosInstance.get(Requests.fetchNetflixOriginals);

        // Pick a random movie from results
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner__description">
          {movie?.overview?.slice(0, 150)}...
        </p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
