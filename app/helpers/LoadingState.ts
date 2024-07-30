import { useEffect, useRef } from "react";

export interface LoadingBarRef {
  continuousStart: () => void;
  staticStart: () => void;
  complete: () => void;
}

export const useLoadingBar = (isLoading: boolean) => {
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (isLoading) {
      loadingBarRef.current?.continuousStart(); // Start the loading bar
    } else {
      loadingBarRef.current?.complete(); // Complete the loading bar
    }
  }, [isLoading]);

  return loadingBarRef;
};
