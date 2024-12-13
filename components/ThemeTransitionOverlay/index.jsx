// components/ThemeTransitionOverlay.js
import { useEffect, useRef } from "react";

const ThemeTransitionOverlay = ({
  isActive,
  targetTheme,
  onTransitionEnd,
  shouldHideOverlay,
}) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleTransitionEndEvent = (e) => {
      if (e.propertyName === "transform" && targetTheme !== null) {
        overlay.removeEventListener("transitionend", handleTransitionEndEvent);
        onTransitionEnd();
      }
    };

    overlay.addEventListener("transitionend", handleTransitionEndEvent);
    return () => {
      overlay.removeEventListener("transitionend", handleTransitionEndEvent);
    };
  }, [onTransitionEnd, targetTheme]);

  return (
    <div
      ref={overlayRef}
      className={`theme-overlay ${isActive ? "active" : ""} ${
        targetTheme === "dark" ? "dark-bg" : "light-bg"
      } ${shouldHideOverlay ? "fade-out" : ""}`}
    ></div>
  );
};

export default ThemeTransitionOverlay;
