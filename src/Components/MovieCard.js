import React from "react";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  return (
    <div className="Movie-Container">
      <img src={movie.image} alt="" />
      <Rate rating={movie.rating} />
      <h1 className="Movie-Title">{movie.name}</h1>
      <h4 className="Movie-Date-Release">{movie.date}</h4>
    </div>
  );
};

export default MovieCard;
