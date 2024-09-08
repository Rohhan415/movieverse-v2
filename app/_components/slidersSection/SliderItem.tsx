import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/16/solid";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Tooltip from "./Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { setHoveredIcon } from "@/app/_store/slice";

interface SliderItemProps {
  item: {
    id: number;
    displayTitle: string;
    displayYear: string;
    clippedOverview: string;
    formattedVote: JSX.Element;
    poster_path?: string | undefined;
  };
}

const SliderItem: React.FC<SliderItemProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const hoveredIcon = useSelector(
    (state: RootState) => state.tooltip.hoveredIcon,
  );

  return (
    <li className="w-full flex flex-col p-6 justify-center">
      <div className="group relative w-[14vw] h-[45vh] overflow-hidden flex flex-col items-center">
        <div className="relative w-full h-full bg-shade-300 group-hover:bg-shade-300 transition-all duration-300">
          <Image
            fill
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.displayTitle}
            title={item.displayTitle}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-base-black bg-opacity-90 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-left gap-2 flex flex-col text-base-white p-4">
              <div>
                <h3 className="mt-1 text-base-white">
                  {item.displayTitle} | <span>{item.displayYear}</span>
                </h3>
                <p className="flex gap-1 items-center">{item.formattedVote}</p>
              </div>
              <p className="text-sm text-shade-100 flex-grow">
                {item.clippedOverview}
              </p>
            </div>
            <div className="flex justify-end gap-3 p-4 relative">
              <Link
                href="/"
                className="w-6 h-6 text-accent-600 group"
                onMouseEnter={() => dispatch(setHoveredIcon("plus"))}
                onMouseLeave={() => dispatch(setHoveredIcon(null))}
              >
                <PlusIcon className="w-full h-full" />
                <Tooltip
                  message="Add to List"
                  visible={hoveredIcon === "plus"}
                />
              </Link>
              <Link
                href="/"
                className="w-6 h-6 text-accent-600 group"
                onMouseEnter={() => dispatch(setHoveredIcon("bookmark"))}
                onMouseLeave={() => dispatch(setHoveredIcon(null))}
              >
                <BookmarkIcon className="w-full h-full" />
                <Tooltip
                  message="Add to Watchlist"
                  visible={hoveredIcon === "bookmark"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SliderItem;
