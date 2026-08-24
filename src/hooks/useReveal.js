import { useEffect } from "react";

// Adds "is-visible" to any element with the "reveal" class once it
// scrolls into view. Respects prefers-reduced-motion (CSS handles
// the reduced-motion fallback by keeping .reveal visible).
export default function useReveal(deps = []) {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
