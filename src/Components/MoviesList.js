import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = props => {
  return (
    <div className="Movie-List">
      {props.moviesData
        .filter(
          el =>
            el.rating >= props.minRating &&
            el.name
              .toLowerCase()
              .includes(props.nameFilter.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MoviesList;
