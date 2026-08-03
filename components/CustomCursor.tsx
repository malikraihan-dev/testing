"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role='button'], input, textarea, select, label";

function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}

export default function CustomCursor() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0, hover: false, visible: false });
  const currentRef = useRef({
    dotX: 0,
    dotY: 0,
    ringX: 0,
    ringY: 0,
    dotOpacity: 0,
    ringSize: 32,
  });
  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0;

    if (isCoarsePointer) {
      return;
    }

    if (rootRef.current) {
      rootRef.current.style.display = "block";
    }

    const previousBodyCursor = document.body.style.cursor;
    const previousHtmlCursor = document.documentElement.style.cursor;
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    const onPointerMove = (event: PointerEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      targetRef.current.visible = true;
      targetRef.current.hover = event.target instanceof Element && !!event.target.closest(HOVER_SELECTOR);
    };

    const onPointerLeave = () => {
      targetRef.current.visible = false;
      targetRef.current.hover = false;
    };

    const onPointerEnter = (event: PointerEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      targetRef.current.visible = true;
    };

    const animate = () => {
      const dotEl = dotRef.current;
      const ringEl = ringRef.current;

      const current = currentRef.current;
      const target = targetRef.current;

      current.dotX = lerp(current.dotX, target.x, 0.24);
      current.dotY = lerp(current.dotY, target.y, 0.24);
      current.ringX = lerp(current.ringX, target.x, 0.12);
      current.ringY = lerp(current.ringY, target.y, 0.12);
      current.dotOpacity = lerp(current.dotOpacity, target.visible && !target.hover ? 1 : 0, 0.2);
      current.ringSize = lerp(current.ringSize, target.hover ? 48 : 32, 0.18);

      if (dotEl) {
        const dotSize = 8;
        dotEl.style.opacity = current.dotOpacity.toFixed(3);
        dotEl.style.transform = `translate3d(${current.dotX - dotSize / 2}px, ${current.dotY - dotSize / 2}px, 0)`;
      }

      if (ringEl) {
        const ringSize = current.ringSize;
        ringEl.style.width = `${ringSize}px`;
        ringEl.style.height = `${ringSize}px`;
        ringEl.style.transform = `translate3d(${current.ringX - ringSize / 2}px, ${current.ringY - ringSize / 2}px, 0)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerenter", onPointerEnter, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerenter", onPointerEnter);
      window.removeEventListener("pointerleave", onPointerLeave);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      document.body.style.cursor = previousBodyCursor;
      document.documentElement.style.cursor = previousHtmlCursor;
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      style={{ display: "none", pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9999 }}
    >
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "8px",
          height: "8px",
          borderRadius: "9999px",
          background: "#ffffff",
          opacity: 0,
          willChange: "transform, opacity",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "32px",
          height: "32px",
          borderRadius: "9999px",
          border: "1px solid rgba(255, 255, 255, 0.9)",
          background: "transparent",
          opacity: 1,
          willChange: "transform, width, height",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}