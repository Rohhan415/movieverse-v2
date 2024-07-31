import React, {Suspense} from "react";
import Spinner from "@/app/_components/Spinner";
import NowPlayingSlider from "@/app/_components/slidersSection/NowPlayingSlider";
import MainBanner from "@/app/_components/entrySection/MainBanner";


function MainContent() {
    return (
        <Suspense fallback={<Spinner/>}>
            <MainBanner/>
            <NowPlayingSlider/>
        </Suspense>
    );
}

export default MainContent;