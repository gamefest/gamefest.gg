import { useState, useEffect } from "react";

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
