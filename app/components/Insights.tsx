"use client";
import { Fade, G, GradText, sec, wrap } from "./shared";
const posts = [
  { cat:"Branding",     title:"Why Nigerian businesses lose clients before the first conversation",                  excerpt:"Your brand makes an impression before you speak a word. Here's why most Nigerian SMEs are losing trust the moment someone Googles them — and what to do about it.", read:"4 min", accent:"rgba(200,151,58,.12)" },
  { cat:"Web Design",   title:"5 website mistakes that are costing you customers right now",                        excerpt:"If your website loads slowly, looks broken on mobile, or has no clear call-to-action, you're actively sending customers to your competition. Here's the fix.", read:"6 min", accent:"rgba(59,130,246,.1)" },
  { cat:"Growth",       title:"How African businesses can compete globally with the right digital presence",         excerpt:"The quality of your digital presence determines whether international clients take you seriously. Here's the exact playbook growing African brands are using.", read:"5 min", accent:"rgba(34,197,94,.08)" },
  { cat:"Social Media", title:"The content formula that grew our client's Instagram from 200 to 8K in 90 days",     excerpt:"It wasn't luck. It wasn't hacks. It was a repeatable content system built on consistency, storytelling, and strategic posting. We're sharing the full framework.", read:"7 min", accent:"rgba(168,85,247,.08)" },
];
export default function Insights() {
  return (
    <section id="insights" style={sec("#0D0D0D")}>
      <div style={wrap}>
        <Fade style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:20, marginBottom:56 }}>
          <div>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:G, letterSpacing:".12em", textTransform:"uppercase", display:"block", marginBottom:14 }}>Insights</span>
            <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2rem,5vw,3.5rem)", color:"#F0EDE6", lineHeight:1.1 }}>Ideas that help your<br/><GradText>business grow.</GradText></h2>
          </div>
          <a href="#" style={{ color:G, fontSize:14, textDecoration:"none" }}>View all articles →</a>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
          {posts.map((p,i)=>(
            <Fade key={p.title} delay={i*70}>
              <article style={{ border:"1px solid rgba(255,255,255,.06)", background:p.accent, borderRadius:2, padding:28, display:"flex", flexDirection:"column", cursor:"pointer", transition:"all .3s", height:"100%" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(200,151,58,.25)"; el.style.transform="translateY(-4px)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; }}>
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(200,151,58,.7)", letterSpacing:".1em", textTransform:"uppercase", border:"1px solid rgba(200,151,58,.2)", borderRadius:99, padding:"3px 12px" }}>{p.cat}</span>
                  <span style={{ color:"rgba(138,132,120,.4)", fontSize:11 }}>{p.read} read</span>
                </div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:18, marginBottom:12, lineHeight:1.3, flex:1 }}>{p.title}</h3>
                <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.7, marginBottom:20 }}>{p.excerpt}</p>
                <div style={{ color:G, fontSize:12, fontWeight:500 }}>Read article →</div>
              </article>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
