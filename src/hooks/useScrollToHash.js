import { useEffect } from "react";

/**
 * Scrolls to the section referenced by the URL hash (e.g. /#boletin),
 * including when the page is loaded fresh from an external link.
 *
 * Why: on a client-rendered SPA the browser tries to scroll to the hash
 * target before React creates the element, so it never moves. This hook
 * re-applies the scroll after mount and whenever the hash changes.
 */
const useScrollToHash = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Small delay so the layout settles right after mount.
    const initialTimeout = setTimeout(scrollToHash, 150);

    // Covers navbar clicks while on the page (uniform behavior).
    window.addEventListener("hashchange", scrollToHash);

    // Layout may shift once images / async content finish loading.
    window.addEventListener("load", scrollToHash);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("load", scrollToHash);
    };
  }, []);
};

export default useScrollToHash;