import React from "react";

const SliderMovies = ({ dataMovie }) => {
  // console.log(dataMovie);

  const baseUrlForMovie = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="flex w-screen rounded-md bg-black h-96 md:w-screen md:h-96">
        <div
          className="md:w-2/3 bg-fixed right-0 w-screen md:absolute h-96 rounded-sm object-fill"
          style={{
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundImage: `linear-gradient(90deg, rgb(0 0 0), rgb(0 0 0 / 0%)) ,url(
              '${baseUrlForMovie}${dataMovie.backdrop_path}'
            )`,
          }}
        ></div>
        <div className="w-full  md:w-2/3 absolute top-24 left-5 md:inset-y-0 md:left-12 md:top-32 lg:w-1/2">
          <div className="flex-row w-full top-24 md:w-full text-white md:p-5 rounded-lg backdrop-opacity-5">
            <div className="md:h-46 w-auto">
              <p className="text-xl font-extrabold text-left">
                {dataMovie.original_title}
              </p>
              <h1 className="text-sm md:text-base text-left">
                {" "}
                {dataMovie.overview}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderMovies;
