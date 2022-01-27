import { useEffect, useRef } from "react";

const useScroll = (
  callback: () => void,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "50% 0px",
    threshold: 0.25,
  },
) => {
  const intersectionAreaRef = useRef();

  useEffect(() => {
    let observerRefValue: Element | null = null;
    const observer = new IntersectionObserver(async (e) => {
      if (e[0].intersectionRatio < 0.1) {
        return;
      }
      callback();
    }, options);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (intersectionAreaRef.current) {
      observer.observe(intersectionAreaRef.current);
      observerRefValue = intersectionAreaRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [callback, options]);

  return { intersectionAreaRef };
};

export default useScroll;
