import React from "react";

const dummyMovie = {
  adult: false,
  backdrop_path: "/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg",
  genre_ids: [10751, 16, 12, 35, 14],
  id: 438148,
  original_language: "en",
  original_title: "Minions: The Rise of Gru",
  overview:
    "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
  popularity: 11510.186,
  poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
  release_date: "2022-06-29",
  title: "Minions: The Rise of Gru",
  video: false,
  vote_average: 7.6,
  vote_count: 391,
};
const DetailMovie = ({ movie }) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
  return (
    <>
      <div className="justify-center ">
        <img
          className=" md:w-full md:h-96"
          src={`${baseUrlForMovie}${dummyMovie.poster_path}`}
          alt={dummyMovie.original_title}
        />
      </div>
      <div className="px-4 md:px-12 text-yellow-100">
        <h2>Description</h2>
        <h1>{dummyMovie.overview}</h1>
      </div>
    </>
  );
};
export default DetailMovie;
