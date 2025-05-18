'use client'

import React, { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  // Initialize state, trying to match the media query on the client ASAP
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // Default for SSR or if window is not available
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    // Handler to call on media query state change
    const listener = () => {
      setMatches(mediaQueryList.matches);
    };

    // Set the initial state correctly once component mounts on client
    // This handles cases where the initial useState value might be different
    // from the actual media query result at mount time (e.g. during hydration)
    if (mediaQueryList.matches !== matches) {
        setMatches(mediaQueryList.matches);
    }


    // Add event listener
    mediaQueryList.addEventListener("change", listener);

    // Cleanup function to remove event listener
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query, matches]); // matches is included to re-sync if it was out of sync initially

  return matches;
};
export default useMediaQuery;