import { useState, useEffect } from "react";

const useMediaQuery = (breakpoint) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(breakpoint);
    setMatches(mediaQueryList.matches);

    const handleMediaQueryChange = (e) => setMatches(e.matches);
    mediaQueryList.addListener(handleMediaQueryChange);

    return () => mediaQueryList.removeListener(handleMediaQueryChange);
  }, [breakpoint]);

  return matches;
};

export default useMediaQuery;
