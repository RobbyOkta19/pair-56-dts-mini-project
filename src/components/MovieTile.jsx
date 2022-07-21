import React from "react";
import { Link } from "react-router-dom";

const MovieTile = ({ dataMovie }) => {
  // console.log(dataMovie);

  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <Link to={`/detail/${dataMovie.id}`}>
        <div className="w-72 h-full md:w-72 md:h-44 justify-center rounded-lg">
          <img
            className="w-full h-full rounded-lg"
            src={`${baseUrlForMovie}${dataMovie.poster_path}`}
            alt={dataMovie.original_title}
          />
        </div>
      </Link>
    </>
  );
};

export default MovieTile;
