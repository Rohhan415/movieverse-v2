// utils/textUtils.ts
export const clipOverview = (overview: string, maxWords: number = 40) => {
  const words = overview.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return overview;
};
