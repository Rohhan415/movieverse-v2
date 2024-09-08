import "hero-slider/dist/index.css";

import { getPopularMovies } from "@/app/_lib/mediaActions";
import MainSlider from "@/app/_components/MainSlider";

// Component definition
export default async function MainBanner() {
  const data = await getPopularMovies();

  return <MainSlider data={data} />;
}
