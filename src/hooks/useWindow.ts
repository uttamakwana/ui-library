// react
import { useEffect, useState } from "react";

// does: custom hook that return current width and height of window screen
export function useWindow() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    // resize event
    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // return
  return { width, height };
}
