import { useEffect, useState } from "react";

// Devuelve cuántas tarjetas se muestran por vista según el breakpoint.
// 3 en desktop (>=1024), 2 en tablet (>=768), 1 en mobile.
export const useBreakpoint = (breakpoints = { sm: 768, lg: 1024 }) => {
  const compute = () => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= breakpoints.lg) return 3;
    if (w >= breakpoints.sm) return 2;
    return 1;
  };

  const [visiblePerView, setVisiblePerView] = useState(compute);

  useEffect(() => {
    const update = () => setVisiblePerView(compute());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visiblePerView;
};
