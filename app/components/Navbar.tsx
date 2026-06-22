"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#work"     },
  { label: "Process",  href: "#process"  },
  { label: "About",    href: "#why-us"   },
  { label: "Insights", href: "#insights" },
];

const BREAKPOINT = 1100; // px — hamburger shows below this width

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [mobile,   setMobile]   = useState(false);

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const onScroll = () => setScrolled(getScrollY() > 20);
    const onResize = () => setMobile(window.innerWidth < BREAKPOINT);

    onScroll();
    onResize();

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const close = () => setOpen(false);

  /* ── shared style helpers ── */
  const G = "#C8973A";
  const navStyle: React.CSSProperties = {
    position:           "fixed",
    top: 0, left: 0, right: 0,
    zIndex:             900,
    padding:            scrolled ? "14px 0" : "20px 0",
    background:         scrolled ? "rgba(13,13,13,.9)" : "transparent",
    backdropFilter:     scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom:       scrolled ? "1px solid rgba(255,255,255,.05)" : "none",
    transition:         "all .4s ease",
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav style={navStyle}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <a href="#" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
            <Image src="/logo.svg" alt="Mufasa Studio" width={88} height={88} priority />
            {/* <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:17, color:"#F0EDE6" }}>Mufasa<span style={{ color:"#C8973A" }}>.</span></span> */}
          </a>

          {/* Desktop links — hidden when mobile */}
          {!mobile && (
            <ul style={{ display:"flex", alignItems:"center", gap:36, listStyle:"none" }}>
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    style={{ textDecoration:"none", color:"#8A8478", fontSize:14, letterSpacing:".02em", transition:"color .3s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#8A8478")}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Right side */}
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            {/* Desktop CTA */}
            {!mobile && (
              <a href="#contact"
                style={{ background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"10px 22px", borderRadius:2, textDecoration:"none", transition:"all .3s", display:"inline-block" }}
                onMouseEnter={e => { e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background=G;        e.currentTarget.style.transform="translateY(0)"; }}>
                Start a Project
              </a>
            )}

            {/* Hamburger — only when mobile */}
            {mobile && (
              <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}
                style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"flex", flexDirection:"column", gap:5 }}>
                <span style={{ display:"block", width:22, height:1.5, background:"#F0EDE6", transition:"all .3s", transform: open ? "translateY(6.5px) rotate(45deg)"  : "none" }} />
                <span style={{ display:"block", width:22, height:1.5, background:"#F0EDE6", transition:"all .3s", opacity: open ? 0 : 1 }} />
                <span style={{ display:"block", width:22, height:1.5, background:"#F0EDE6", transition:"all .3s", transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div role="dialog" aria-modal="true" aria-label="Navigation"
        style={{ position:"fixed", inset:0, zIndex:800, background:"rgba(8,8,8,.97)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:36, opacity: open ? 1 : 0, pointerEvents: open ? "all" : "none", transition:"opacity .4s" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={close}
            style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:36, color:"#F0EDE6", textDecoration:"none", transition:"color .3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = G)}
            onMouseLeave={e => (e.currentTarget.style.color = "#F0EDE6")}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={close}
          style={{ background:G, color:"#0D0D0D", fontWeight:500, fontSize:15, padding:"14px 40px", borderRadius:2, textDecoration:"none", marginTop:8 }}>
          Start a Project
        </a>
      </div>
    </>
  );
}
