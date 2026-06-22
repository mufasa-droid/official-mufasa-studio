"use client";
import { useEffect, useRef } from "react";

export function Fade({ children, delay=0, style={} }: { children:React.ReactNode; delay?:number; style?:React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity="0"; el.style.transform="translateY(28px)"; el.style.transition="opacity .75s ease,transform .75s ease";
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(()=>{ el.style.opacity="1"; el.style.transform="translateY(0)"; }, delay); obs.disconnect(); }
    }, { threshold:.07, rootMargin:"0px 0px -50px 0px" });
    obs.observe(el); return ()=>obs.disconnect();
  },[delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

export const G  = "#C8973A";
export const GL = "#E2B660";

export function SectionHeader({ label, title, sub }: { label:string; title:React.ReactNode; sub?:string }) {
  return (
    <Fade style={{ marginBottom:56 }}>
      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:G, letterSpacing:".12em", textTransform:"uppercase" as const, display:"block", marginBottom:14 }}>{label}</span>
      <div style={{ display:"flex", flexWrap:"wrap" as const, alignItems:"flex-end", justifyContent:"space-between", gap:20 }}>
        <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2rem,5vw,3.5rem)", color:"#F0EDE6", lineHeight:1.1 }}>{title}</h2>
        {sub && <p style={{ color:"#8A8478", maxWidth:320, fontSize:14, lineHeight:1.7 }}>{sub}</p>}
      </div>
    </Fade>
  );
}

export function GradText({ children }: { children:React.ReactNode }) {
  return <span style={{ fontStyle:"italic", background:"linear-gradient(135deg,#C8973A,#E2B660,#C8973A)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{children}</span>;
}

export const wrap: React.CSSProperties = { maxWidth:1280, margin:"0 auto", padding:"0 32px" };
export const sec = (bg:string): React.CSSProperties => ({ padding:"clamp(4rem,10vw,7rem) 0", background:bg });
