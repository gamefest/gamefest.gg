import React, { useState, useEffect, useMemo } from "react";
import { isClient } from "./document";
import { addMissingUnit } from "./string";
import classNames from "classnames";
import Img from "gatsby-image";

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

export function useMediaBreakpoints(breakpoints) {
  const collator = useMemo(
    () =>
      new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base"
      })
  );
  const sortedBreakpoints = useMemo(
    () => [...breakpoints].sort(collator.compare),
    [breakpoints, collator]
  );
  const queries = sortedBreakpoints.map(
    b => `(min-width: ${addMissingUnit(b)})`
  );
  const getBreakpoint = matches => {
    // Find first media query that fails
    const result = matches.findIndex(m => !m);
    // If none fail, then return last breakpoint; else return the last passing
    return result === -1 ? sortedBreakpoints.length - 1 : result - 1;
  };
  const [state, setState] = useState(
    isClient
      ? () => getBreakpoint(queries.map(q => window.matchMedia(q).matches))
      : -1
  );

  useEffect(() => {
    let mounted = true;
    const mediaQueries = queries.map(q => window.matchMedia(q));
    const onChange = () => {
      if (!mounted) {
        return;
      }
      setState(getBreakpoint(mediaQueries.map(m => m.matches)));
    };

    mediaQueries.forEach(mql => mql.addListener(onChange));
    setState(getBreakpoint(mediaQueries.map(m => m.matches)));

    return () => {
      mounted = false;
      mediaQueries.forEach(mql => mql.removeListener(onChange));
    };
  }, [sortedBreakpoints]);

  return state === -1 ? null : sortedBreakpoints[state];
}

export function useMdxImages(mdx) {
  const images = mdx.frontmatter.images;
  return useMemo(
    () =>
      Object.assign(
        {},
        ...images.map(i => ({
          [i.key]: (
            <Img
              fluid={i.src.childImageSharp.fluid}
              className={classNames({ "no-select": !i.selectable })}
            />
          )
        }))
      ),
    [images]
  );
}
