import { useState, useEffect } from "react";

export function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, rootMargin]);

  return isVisible;
}
