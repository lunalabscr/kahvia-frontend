import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll if we are on the home page (or the page where the sections are)
    // Adjust this condition if sections exist on other pages too
    if (pathname === "/") {
      if (hash) {
        // We want to scroll to a specific section
        const targetId = hash.replace("#", "");

        // Attempt to find the element
        const element = document.getElementById(targetId);

        if (element) {
          // Element found immediately
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 0);
        } else {
          // Element not found yet (maybe rendering?), retry briefly
          let retries = 0;
          const maxRetries = 20; // 2 seconds total roughly (if 100ms interval)
          const intervalId = setInterval(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              clearInterval(intervalId);
            }
            retries++;
            if (retries >= maxRetries) {
              clearInterval(intervalId);
            }
          }, 100);

          // Cleanup interval on unmount or dependency change
          return () => clearInterval(intervalId);
        }
      } else {
        // No hash, standard scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);
};
