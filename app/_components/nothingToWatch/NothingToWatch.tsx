import React from "react";
import Link from "next/link";
import Image from "next/image";

function NothingToWatch() {
  return (
    <section>
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-col items-center gap-2 my-12 text-center">
          <Image
            src="/yuzu.png"
            width="249"
            height="94"
            className=""
            alt="aa"
          />
          <p className="text-2xl text-base-white">
            Still looking for something to watch?
          </p>
          <p className="text-shade-300">
            Check out our full library of movies and shows.
          </p>
          <Link href="/search">
            <button className=" mt-2 uppercase font-medium bg-primary-600 text-accent-600 py-2 px-4 border-2 border-accent-600 hover:bg-accent-600 hover:text-base-white transition-colors duration-200 w-40">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NothingToWatch;
