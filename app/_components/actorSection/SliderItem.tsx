import React from "react";
import Image from "next/image";
import { Actor } from "@/app/_types/types";

interface SliderItemProps {
  actor: Actor;
}

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://image.tmdb.org/t/p/w${width}${src}?q=${quality || 75}`;
};

const SliderItem: React.FC<SliderItemProps> = ({ actor }) => {
  return (
    <li className="w-full mx-auto flex flex-col justify-center">
      <div className="group relative overflow-hidden flex flex-col items-center">
        <div className="relative w-[10vw] h-[10vw] rounded-full">
          <Image
            fill
            loader={imageLoader}
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            title={actor.name}
            className="object-cover rounded-full"
          />
        </div>
        <p className="mt-4 text-center">{actor.name}</p>
      </div>
    </li>
  );
};

export default SliderItem;
