import React from "react";
import { getPopularPersons } from "@/app/_lib/mediaActions";
import SliderList from "@/app/_components/actorSection/SliderList";
import Link from "next/link";

async function ActorSection() {
  const data = await getPopularPersons();

  return (
    <section className="max-w-full mx-auto bg-base-black">
      <h6 className="my-6 pl-32  tracking-widest text-base">
        <span className="text-shade-300">
          Most Popular Celebrities &nbsp; | &nbsp;{" "}
        </span>
        <Link className=" text-accent-600" href="/search">
          See All
        </Link>
      </h6>
      <div className="">
        <SliderList data={data} />
      </div>
    </section>
  );
}

export default ActorSection;
