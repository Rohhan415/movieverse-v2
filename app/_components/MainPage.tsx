import React, { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import NowPlayingSlider from "@/app/_components/slidersSection/nowPlayingMovies/NowPlayingSlider";
import MainBanner from "@/app/_components/entrySection/MainBanner";
import PopularSeries from "@/app/_components/slidersSection/popularSeries/popularSeries";

function MainContent() {
  return (
    <Suspense fallback={<Spinner />}>
      <MainBanner />
      <div className=" overflow-hidden ">
        <NowPlayingSlider />
        <PopularSeries />
      </div>
    </Suspense>
  );
}

export default MainContent;
