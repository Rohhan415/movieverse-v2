import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getPopularSeries } from "@/app/_lib/actions";
import Link from "next/link";
import SliderList from "@/app/_components/slidersSection/SliderList";

async function NowPlayingSlider() {
  const data = await getPopularSeries();

  console.log(data, "ddsss");

  return (
    <section className="max-w-[120rem] mx-auto bg-base-black">
      <h6 className="my-6 pl-32  tracking-widest text-base">
        <span className="text-shade-300">Popular Series&nbsp; | &nbsp; </span>
        <Link className=" text-accent-600" href="/search">
          Explore More
        </Link>
      </h6>
      <div className="">
        <SliderList data={data} />
      </div>
    </section>
  );
}

export default NowPlayingSlider;
