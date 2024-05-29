import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log(movies);
  if (movies === null) return;
//   console.log(movies[0].poster_path);
  return ( movies &&
    <div className="relative bottom-48 z-20 mt-2 overflow 
    md:ml-12 md:mt-4">
      <h1 className="text-bolder text-white text-lg 
      md:text-2xl mb-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar [&::-webkit-scrollbar]:hidden">
        <div className="flex">
          {movies.map((m) => {
            return <MovieCard key={m.id} posterPath={m.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
