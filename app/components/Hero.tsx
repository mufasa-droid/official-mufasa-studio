"use client";
import { useEffect, useRef } from "react";

const G = "#C8973A";

function Fade({ el="div", children, delay=0, style={} }: { el?:string; children:React.ReactNode; delay?:number; style?:React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current; if (!node) return;
    node.style.opacity = "0"; node.style.transform = "translateY(28px)";
    node.style.transition = "opacity .8s ease, transform .8s ease";
    setTimeout(() => { node.style.opacity = "1"; node.style.transform = "translateY(0)"; }, delay);
  }, [delay]);
  return <div ref={ref} style={style}>{children}</div>;
}

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", paddingTop:120, paddingBottom:"clamp(3rem,8vw,6rem)", overflow:"hidden" }}>

      {/* Grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(200,151,58,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,151,58,.04) 1px,transparent 1px)", backgroundSize:"80px 80px", maskImage:"radial-gradient(ellipse 80% 80% at 50% 40%,black 20%,transparent 100%)", WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 40%,black 20%,transparent 100%)", pointerEvents:"none" }} />

      {/* Parallax orbs */}
      <div ref={orbRef} style={{ position:"absolute", inset:0, transition:"transform .7s ease-out", pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-15%", right:"-8%", width:560, height:560, borderRadius:"50%", background:"rgba(200,151,58,.09)", filter:"blur(100px)", animation:"glowPulse 3s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"-10%", left:"-8%",  width:380, height:380, borderRadius:"50%", background:"rgba(61,43,31,.5)", filter:"blur(100px)" }} />
      </div>

      <div style={{ position:"relative", zIndex:10, maxWidth:1280, margin:"0 auto", padding:"0 32px", width:"100%" }}>

        {/* Label */}
        <Fade delay={100} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
          <span style={{ width:32, height:1, background:G, display:"block", flexShrink:0 }} />
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#8A8478", letterSpacing:".12em", textTransform:"uppercase" }}>Lagos, Nigeria · Est. 2025</span>
        </Fade>

        {/* Headline */}
        <Fade delay={200} style={{ marginBottom:24 }}>
          <h1 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2.8rem,7vw,6.2rem)", lineHeight:1.06 }}>
            <span style={{ color:"#F0EDE6" }}>We help African<br/>businesses build<br/></span>
            <span style={{ background:"linear-gradient(135deg,#C8973A 0%,#E2B660 50%,#C8973A 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", fontStyle:"italic" }}>premium digital</span>
            <br/><span style={{ color:"#F0EDE6" }}>brands.</span>
          </h1>
        </Fade>

        {/* Sub */}
        <Fade delay={320} style={{ marginBottom:40 }}>
          <p style={{ color:"#8A8478", fontWeight:300, fontSize:"clamp(1rem,1.4vw,1.1rem)", lineHeight:1.75, maxWidth:500 }}>
            Mufasa Studio combines bold branding, strategic design, and modern web experiences to help your business attract attention, build trust, and grow — without the big-agency price tag.
          </p>
        </Fade>

        {/* CTAs */}
        <Fade delay={440} style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:64 }}>
          <a href="#contact"
            style={{ display:"inline-flex", alignItems:"center", gap:8, background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"14px 28px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
            onMouseEnter={e => { e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background=G;         e.currentTarget.style.transform="translateY(0)"; }}>
            Book a Discovery Call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#work"
            style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1px solid rgba(240,237,230,.14)", color:"#F0EDE6", fontSize:14, padding:"14px 28px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(200,151,58,.4)"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(240,237,230,.14)"; e.currentTarget.style.transform="translateY(0)"; }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            View Our Work
          </a>
        </Fade>

        {/* Stats */}
        <Fade delay={560} style={{ borderTop:"1px solid rgba(255,255,255,.06)", paddingTop:28, display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))", gap:"16px 32px" }}>
          {[
            { value:"50+", label:"Projects Delivered"  },
            { value:"30+", label:"Brands Transformed"  },
            { value:"98%", label:"Client Satisfaction"  },
            { value:"3×",  label:"Average Growth"       },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(1.8rem,4vw,2.6rem)", color:G, lineHeight:1, marginBottom:6 }}>{s.value}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"#8A8478", letterSpacing:".1em", textTransform:"uppercase" }}>{s.label}</div>
            </div>
          ))}
        </Fade>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:"absolute", bottom:24, right:32, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
        <div style={{ width:1, height:52, background:"linear-gradient(to bottom,#C8973A,transparent)", animation:"glowPulse 2s ease-in-out infinite" }} />
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"#4A4640", letterSpacing:".18em", textTransform:"uppercase", writingMode:"vertical-rl" }}>Scroll</span>
      </div>

      <style>{`@keyframes glowPulse{0%,100%{opacity:.4}50%{opacity:.9}}`}</style>
    </section>
  );
}
