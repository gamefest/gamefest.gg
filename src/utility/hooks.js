import { useState, useEffect } from "react";
import { isClient } from "./document";

export function useScrollThreshold(threshold, range = 40) {
  const [above, setAbove] = useState(true);
  useEffect(() => {
    const listener = () => {
      const belowCheck = window.scrollY > threshold + range;
      const aboveCheck = window.scrollY < threshold - range;
      if (above && belowCheck) setAbove(false);
      else if (!above && aboveCheck) setAbove(true);
    };
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  });
  return above;
}

export function useMedia(query) {
  const [matches, setMatches] = useState(() =>
    isClient ? window.matchMedia(query).matches : null
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
