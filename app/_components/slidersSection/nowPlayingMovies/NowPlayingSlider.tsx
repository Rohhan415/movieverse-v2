import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getNowPlayingMovies } from "@/app/_lib/mediaActions";
import SliderList from "@/app/_components/slidersSection/SliderList";
import Link from "next/link";

async function NowPlayingSlider() {
  const data = await getNowPlayingMovies();

  return (
    <section className="max-w-full  mx-auto bg-base-black">
      <h6 className="my-6 pl-32  tracking-widest text-base">
        <span className="text-shade-300">
          Now Playing in Theaters&nbsp; | &nbsp;{" "}
        </span>{" "}
        <Link className=" text-accent-600" href="/search">
          Watch All
        </Link>
      </h6>
      <div className="">
        <SliderList data={data} />
      </div>
    </section>
  );
}

export default NowPlayingSlider;
