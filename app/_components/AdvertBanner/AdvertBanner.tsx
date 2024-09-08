import React from "react";
import { getSeriesDetails, getSeriesImages } from "@/app/_lib/mediaActions";
import Image from "next/image";
import { ADVERTISEMENT_BANNER } from "@/app/helpers/Constants";

async function AdvertBanner() {
  const data = await getSeriesDetails("94997");
  const images = await getSeriesImages("94997");

  // @ts-ignore
  const filePath = images.backdrops?.[ADVERTISEMENT_BANNER]?.file_path;

  return (
    <div className=" flex justify-center">
      <div className="relative  w-[85rem] h-[28rem] ">
        <Image
          fill
          className="object-cover"
          alt={data.name || "Banner Image"}
          src={`https://image.tmdb.org/t/p/original/${filePath}`}
        />
      </div>
    </div>
  );
}

export default AdvertBanner;
