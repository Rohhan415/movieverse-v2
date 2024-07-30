import MainBanner from "./_components/entrySection/MainBnner";
import { getPopularMovies } from "./_lib/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LoadingBar from "react-top-loading-bar";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainBanner />
      </HydrationBoundary>
    </div>
  );
}
