import React from "react";
import { setSearchParams } from "@/app/_store/movieSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { MovieSearchItemProps } from "@/app/_types/types";

type GenresResultProps = Pick<MovieSearchItemProps, "genresResult">;

function MovieGenres({ genresResult }: GenresResultProps) {
  // Redux dispatch and state
  const dispatch = useDispatch<AppDispatch>();
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  // Toggling genres
  const handleGenreToggle = (genreId: number) => {
    const newGenres = searchParams.genres.includes(genreId.toString())
      ? searchParams.genres.filter((id) => id !== genreId.toString())
      : [...searchParams.genres, genreId.toString()];

    dispatch(setSearchParams({ genres: newGenres }));
  };
  return (
    <div>
      {genresResult.genres.map((genre) => (
        <button
          key={genre.id}
          type="button"
          onClick={() => handleGenreToggle(genre.id)}
          className={`${
            searchParams.genres.includes(genre.id.toString())
              ? "bg-blue-500"
              : "bg-gray-500"
          } text-white py-1 px-2 m-1 border-none cursor-pointer`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default MovieGenres;
