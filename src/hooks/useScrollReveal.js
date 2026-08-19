import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal – returns a ref and an isVisible flag.
 * Apply the ref to any element; when it enters the viewport it will be marked visible.
 * Pair with CSS classes: reveal-hidden / reveal-visible (defined in index.css).
 *
 * @param {number} threshold - IntersectionObserver threshold (0–1). Default 0.15
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
