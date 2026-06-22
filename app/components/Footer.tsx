"use client";

import Image from "next/image";

const cols = { Services:["Web Design & Dev","Brand Identity","Social Media","UI / UX Design","SEO & Growth","Maintenance"], Company:["Our Work","Process","Why Us","Insights","Pricing"], Connect:["Instagram","Twitter / X","LinkedIn","WhatsApp"] };
export default function Footer() {
  return (
    <footer style={{ background:"#111111", borderTop:"1px solid rgba(255,255,255,.05)" }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"clamp(48px,8vw,64px) 32px 32px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"36px 48px", marginBottom:48 }}>
          <div style={{ gridColumn:"span 2" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <Image src="/logo.svg" alt="Mufasa Studio" width={88} height={88} />
              {/* <svg width="26" height="26" viewBox="0 0 32 32" fill="none"><polygon points="16,2 30,28 2,28" fill="#C8973A" opacity=".92"/><polygon points="16,13 22,28 10,28" fill="#111111"/></svg> */}
              {/* <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:17, color:"#F0EDE6" }}>Mufasa<span style={{ color:"#C8973A" }}>.</span></span> */}
            </div>
            <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.7, maxWidth:240, marginBottom:18 }}>We build brands that roar. Affordable premium creative services for African businesses ready to compete globally.</p>
            <div style={{ display:"flex", gap:8 }}>
              {["IG","X","LI","WA"].map(s=>(
                <a key={s} href="#" aria-label={s} style={{ width:32, height:32, border:"1px solid rgba(255,255,255,.08)", borderRadius:2, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none", color:"rgba(138,132,120,.55)", fontSize:10, fontFamily:"'DM Mono',monospace", transition:"all .3s" }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(200,151,58,.4)"; el.style.color="#C8973A"; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.08)"; el.style.color="rgba(138,132,120,.55)"; }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(cols).map(([section,links])=>(
            <div key={section}>
              <h5 style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:16 }}>{section}</h5>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                {links.map(l=><li key={l}><a href="#" style={{ color:"rgba(138,132,120,.65)", fontSize:13, textDecoration:"none", transition:"color .3s" }} onMouseEnter={e=>(e.currentTarget.style.color="#C8973A")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(138,132,120,.65)")}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:22, display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:14 }}>
          <p style={{ color:"rgba(138,132,120,.35)", fontSize:12 }}>© 2025 Mufasa Studio. All rights reserved. Lagos, Nigeria.</p>
          <div style={{ display:"flex", gap:20 }}>
            {["Privacy Policy","Terms of Service"].map(l=><a key={l} href="#" style={{ color:"rgba(138,132,120,.35)", fontSize:12, textDecoration:"none", transition:"color .3s" }} onMouseEnter={e=>(e.currentTarget.style.color="#8A8478")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(138,132,120,.35)")}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
