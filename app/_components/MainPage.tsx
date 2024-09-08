import React, { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import MainBanner from "@/app/_components/entrySection/MainBanner";
import PopularSeries from "@/app/_components/slidersSection/popularSeries/popularSeries";
import NowPlayingSlider from "@/app/_components/slidersSection/nowPlayingMovies/NowPlayingSlider";
import AdvertBanner from "@/app/_components/AdvertBanner/AdvertBanner";
import ActorSection from "@/app/_components/actorSection/actorSection";
import NothingToWatch from "@/app/_components/nothingToWatch/NothingToWatch";

function MainContent() {
  return (
    <Suspense fallback={<Spinner />}>
      <MainBanner />
      <div className=" flex flex-col over gap-14">
        <NowPlayingSlider />
        <PopularSeries />
        <AdvertBanner />
        <ActorSection />
        <NothingToWatch />
      </div>
    </Suspense>
  );
}

export default MainContent;
{
  /*<input*/
}
{
  /*  type="number"*/
}
{
  /*  value={searchParams.voteCountGte}*/
}
{
  /*  onChange={(e) =>*/
}
{
  /*    dispatch(*/
}
{
  /*      setSearchParams({ voteCountGte: Number(e.target.value) || "" }),*/
}
{
  /*    )*/
}
{
  /*  }*/
}
{
  /*/>*/
}

{
  /*<input*/
}
{
  /*  type="number"*/
}
{
  /*  value={searchParams.runtimeGte}*/
}
{
  /*  onChange={(e) =>*/
}
{
  /*    dispatch(*/
}
{
  /*      setSearchParams({ runtimeGte: Number(e.target.value) || "" }),*/
}
{
  /*    )*/
}
{
  /*  }*/
}
{
  /*/>*/
}
