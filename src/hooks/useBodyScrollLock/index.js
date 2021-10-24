import { useLayoutEffect } from "react";

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(
      document.querySelector(":root")
    ).overflow;
    document
      .querySelector(":root")
      .style.setProperty("overflow", "hidden", "important");
    return () =>
      (document.querySelector(":root").style.overflow = originalStyle);
  }, []);
}

export { useBodyScrollLock };
