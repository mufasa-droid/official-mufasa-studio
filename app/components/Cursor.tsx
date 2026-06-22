"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const lag = { x: pos.x, y: pos.y };

    if (dot.current)  dot.current.style.transform  = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
    if (ring.current) ring.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
    if (dot.current)  dot.current.style.opacity  = "1";
    if (ring.current) ring.current.style.opacity = "1";

    const move = (e: MouseEvent) => { pos.x = e.clientX; pos.y = e.clientY; };
    window.addEventListener("mousemove", move);

    let raf: number;
    const tick = () => {
      lag.x += (pos.x - lag.x) * 0.15;
      lag.y += (pos.y - lag.y) * 0.15;
      if (dot.current)  dot.current.style.transform  = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate(${lag.x}px, ${lag.y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow = () => {
      dot.current?.style.setProperty("width", "16px");
      dot.current?.style.setProperty("height", "16px");
      ring.current?.style.setProperty("width", "52px");
      ring.current?.style.setProperty("height", "52px");
      ring.current?.style.setProperty("opacity", ".4");
    };
    const shrink = () => {
      dot.current?.style.setProperty("width", "10px");
      dot.current?.style.setProperty("height", "10px");
      ring.current?.style.setProperty("width", "38px");
      ring.current?.style.setProperty("height", "38px");
      ring.current?.style.setProperty("opacity", "1");
    };

    document.body.addEventListener("mouseover", (e) => {
      const target = (e.target as HTMLElement)?.closest?.("a, button, [role='button'], input, select, textarea");
      if (target) grow(); else shrink();
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 10, height: 10, background: "#C8973A", borderRadius: "50%",
          pointerEvents: "none", zIndex: 99999, opacity: 0,
          transition: "width .2s, height .2s",
          willChange: "transform",
        }}
        className="custom-cursor-dot"
      />
      <div
        ref={ring}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 38, height: 38, border: "1px solid rgba(200,151,58,.4)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 99998, opacity: 0,
          transition: "width .2s, height .2s, opacity .2s",
          willChange: "transform",
        }}
        className="custom-cursor-ring"
      />
      <style>{`
        @media (max-width: 767px) {
          .custom-cursor-dot, .custom-cursor-ring { display: none !important; }
        }
      `}</style>
    </>
  );
}