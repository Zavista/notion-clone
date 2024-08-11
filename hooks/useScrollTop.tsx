import { useState, useEffect } from "react";

const useScrollTop = (threshold: number = 10): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handler = (): void => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
};

export default useScrollTop;
