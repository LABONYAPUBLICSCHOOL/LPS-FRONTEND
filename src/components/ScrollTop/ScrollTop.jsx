import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * ScrollToTop:
 * - only scrolls to top for navigationType "PUSH" or "REPLACE"
 *   (so browser 'POP' restores previous scroll normally)
 * - waits for window 'load' if the document is not fully loaded to avoid layout jumps
 * - uses behavior "auto" to jump immediately (set to "smooth" if you prefer animated)
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // "PUSH" | "POP" | "REPLACE"

  useEffect(() => {
    // Only force-scroll for PUSH or REPLACE navigations
    if (navType !== "PUSH" && navType !== "REPLACE") return;

    const doScroll = () => {
      // Use "auto" to avoid showing multiple-step animation when other scrolls happen.
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // If page already fully loaded, scroll immediately.
    if (document.readyState === "complete") {
      // use requestAnimationFrame to ensure paint timing is safe
      requestAnimationFrame(() => requestAnimationFrame(doScroll));
    } else {
      // Wait for load to avoid layout shifts causing extra scrolls
      const onLoad = () => {
        requestAnimationFrame(() => requestAnimationFrame(doScroll));
      };
      window.addEventListener("load", onLoad, { once: true });

      // fallback: still scroll after a short timeout in case load doesn't fire quickly
      const fallback = setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(doScroll));
      }, 800);

      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, [pathname, navType]);

  return null;
}
