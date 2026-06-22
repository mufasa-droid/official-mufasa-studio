"use client";
const items = ["Web Design","Brand Identity","UI / UX","Social Media","SEO & Growth","E-commerce","Logo Design","Strategy","Web Design","Brand Identity","UI / UX","Social Media","SEO & Growth","E-commerce","Logo Design","Strategy"];
export default function Marquee() {
  return (
    <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", borderBottom:"1px solid rgba(255,255,255,.05)", background:"#111111", padding:"14px 0", overflow:"hidden" }}>
      <div style={{ display:"flex", width:"max-content", gap:48, animation:"marquee 30s linear infinite" }}>
        {items.map((item,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:16, whiteSpace:"nowrap" }}>
            <span style={{ width:4, height:4, borderRadius:"50%", background:"#C8973A", display:"inline-block" }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#8A8478", letterSpacing:".12em", textTransform:"uppercase" }}>{item}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
