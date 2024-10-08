"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 2.5,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
