import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery =
      typeof window !== "undefined" && window.matchMedia(query);

    if (!mediaQuery) {
      // Handle server-side rendering (SSR) case, set default matches value
      setMatches(false);
      return;
    }

    const handleChange = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
