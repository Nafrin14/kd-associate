import { useEffect, useRef, useState } from "react";

/**
 * useCountUp – animates a number from 0 (or `start`) to `end` when the
 * target element enters the viewport.
 *
 * @param {number}  end       - Target number to count up to
 * @param {number}  duration  - Animation duration in ms (default 1800)
 * @param {number}  start     - Starting number (default 0)
 * @returns {{ ref, count }} – attach ref to the element; use count for display
 */
export function useCountUp(end, duration = 1800, start = 0) {
  const ref = useRef(null);
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const range = end - start;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(start + range * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, start, end, duration]);

  return { ref, count };
}
