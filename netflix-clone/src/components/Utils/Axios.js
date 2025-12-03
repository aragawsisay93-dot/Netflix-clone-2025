// import React, { useEffect, useState } from "react";
// import axiosInstance from "../axiosInstance";
// import requests from "../requests";

// function Movies() {
//   const [trending, setTrending] = useState([]);

//   useEffect(() => {
//     const fetchTrending = async () => {
//       try {
//         const response = await axiosInstance.get(requests.fetchTrending);
//         setTrending(response.data.results);
//       } catch (error) {
//         console.error("Error fetching trending movies:", error);
//       }
//     };

//     fetchTrending();
//   }, []);

//   return (
//     <div>
//       <h2>Trending Movies & Shows</h2>
//       <ul>
//         {trending.map((movie) => (
//           <li key={movie.id}>{movie.title || movie.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Movies;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default axiosInstance;
