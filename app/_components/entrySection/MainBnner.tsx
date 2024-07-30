"use client";
import { useLoadingBar } from "@/app/helpers/LoadingState";
import { Nav, Slide } from "hero-slider";
import HeroSlider from "hero-slider/dist/HeroSlider";
import "hero-slider/dist/index.css";
import LoadingBar from "react-top-loading-bar";
import { Movie } from "../../_types/types";
import { usePopularMovies } from "./usePopularMovies";

// Component definition
export default function MainBanner() {
  const { moviesData, isLoading } = usePopularMovies();
  const loadingBarRef = useLoadingBar(isLoading);

  console.log(moviesData);

  const slides = moviesData?.results.slice(0, 9).map((movie: Movie) => (
    <Slide
      key={movie.id}
      style={{
        background:
          "linear-gradient(90deg, rgba(15,15,15,1) 15%, rgba(15,15,15,0) 100%)",
      }}
      background={{
        backgroundImageSrc: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,

        backgroundImageBlendMode: "color",
      }}
    >
      <div className="flex h-full w-full items-center">
        <div className="inline-grid text-left ml-28 max-w-xl border-l-[1px] border-shade-100 pl-8">
          <p className="text-shade-100 font-extralight uppercase">
            {movie.original_language}
          </p>
          <p className="text-6xl font-semibold text-base-white mb-5">
            {movie.title}
          </p>
          <p className="text-shade-100 font-light">{movie.overview}</p>
          <button className=" mt-8 w-40 h-9 font-light  bg-accent-600 text-base-white hover:bg-base-gray transition duration-300 ">
            Explore
          </button>
        </div>
      </div>
    </Slide>
  ));

  return (
    <>
      <LoadingBar color="#b33e00" ref={loadingBarRef} />
      <div className="-mt-16 z-10">
        <HeroSlider
          animations={{ slidingAnimation: "fade" }}
          // autoplay={{ autoplayDuration: 20000 }}
          accessibility={{
            shouldDisplayButtons: false,
          }}
        >
          <Nav />
          {slides}
        </HeroSlider>
      </div>
    </>
  );
}
