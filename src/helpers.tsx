import { AppImage } from "src/types/image";
import { useState, useEffect } from "react";

const MOBILE = 768;

export const extractImages = (data) => {
  let images: Array<AppImage> = [];
  data.map((obj) => images.push(obj.image));
  return images;
};

export const useBreakpoints = () => {
  const [viewPortWidth, setViewPortWidth] = useState(window?.innerWidth);
  const [mobile, setMobile] = useState(window?.innerWidth <= MOBILE);

  // Set viewPortWidth once on initial render
  useEffect(() => {
    const handleWindowResize = () => setViewPortWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  // Monitor changes in viewport width
  useEffect(() => {
    setMobile(viewPortWidth <= MOBILE);
  }, [viewPortWidth]);

  return { mobile };
};
