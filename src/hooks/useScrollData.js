import { useEffect, useState } from "react";

export const useScrollData = ( myDivRef, options ) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const optionsMain = options ?? {
      root: null, // use the viewport as the root
      rootMargin: "0px", // no margin around the viewport
      threshold: 0, // detect when the div is completely out of view
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(!entry.isIntersecting);
    }, optionsMain);

    const myDiv = myDivRef.current;
    if (myDiv) {
      observer.observe(myDiv);
    }

    return () => {
      if (myDiv) {
        observer.unobserve(myDiv);
      }
    };
  }, []);

  return { isIntersecting };
};
