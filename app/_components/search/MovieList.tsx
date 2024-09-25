import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import Image from "next/image";
import { PlusIcon, StarIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Tooltip from "@/app/_components/slidersSection/Tooltip";
import { setHoveredIcon } from "@/app/_store/slice";
import placeholder from "@/public/noImage.jpg";
import yuzu from "@/public/yuzu.png";

function MovieList() {
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movieSearch);
  const hoveredIcon = useSelector(
    (state: RootState) => state.tooltip.hoveredIcon,
  );

  return (
    <div className="p-4 h-full">
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group relative w-80 h-[30rem] flex flex-col items-center shadow-md"
            >
              <div className="relative w-full h-full bg-shade-300 group-hover:bg-shade-300 transition-all duration-300">
                <Image
                  fill
                  className="bg-base-gray object-cover"
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : placeholder
                  }
                  alt={movie.title}
                />
                <div className="absolute inset-0 bg-base-black bg-opacity-90 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-left gap-2 flex flex-col text-base-white p-4">
                    <div>
                      <h3 className="mt-1 text-base-white">{movie.title}</h3>
                      <p className="flex gap-1 items-center">
                        {movie.vote_average?.toFixed(1)}{" "}
                        <StarIcon className="inline w-4 h-4" /> (
                        {movie.vote_count})
                      </p>
                    </div>
                    <p className="text-sm text-shade-100 flex-grow">
                      {movie.overview?.slice(0, 600)}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 p-4 relative">
                    <button
                      className="w-6 h-6 text-accent-600 group"
                      onMouseEnter={() => dispatch(setHoveredIcon("plus"))}
                      onMouseLeave={() => dispatch(setHoveredIcon(null))}
                    >
                      <PlusIcon className="w-full h-full" />
                      <Tooltip
                        message="Add to List"
                        visible={hoveredIcon === "plus"}
                      />
                    </button>
                    <button
                      className="w-6 h-6 text-accent-600 group"
                      onMouseEnter={() => dispatch(setHoveredIcon("bookmark"))}
                      onMouseLeave={() => dispatch(setHoveredIcon(null))}
                    >
                      <BookmarkIcon className="w-full h-full" />
                      <Tooltip
                        message="Add to Watchlist"
                        visible={hoveredIcon === "bookmark"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" h-full flex flex-col justify-center items-center">
          <Image src={yuzu} alt="yuzu" />
          <h2 className="text-2xl text-shade-200">Why being so specific?</h2>
          <p className="text-shade-200">
            No results were found that match your query.
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieList;
