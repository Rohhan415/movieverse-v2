import React, { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import NowPlayingSlider from "@/app/_components/slidersSection/nowPlayingMovies/NowPlayingSlider";
import MainBanner from "@/app/_components/entrySection/MainBanner";
import PopularSeries from "@/app/_components/slidersSection/popularSeries/popularSeries";

function MainContent() {
  return (
    <Suspense fallback={<Spinner />}>
      <MainBanner />
      <div className="grid overflow-hidden gap-20">
        <NowPlayingSlider />
        <PopularSeries />
      </div>
    </Suspense>
  );
}

export default MainContent;
