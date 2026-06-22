"use client";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";
const reasons = [
  { icon:"🎯", title:"Strategy before pixels",      desc:"Every design decision is rooted in your business goals. We don't open Figma until we understand what success looks like for you." },
  { icon:"💬", title:"Fast, clear communication",   desc:"No ghosting, no vague timelines. You'll always know where your project stands with structured updates and direct access to your team." },
  { icon:"🌍", title:"African creative direction",  desc:"We understand the African market. We design for your actual audience — not a Western template pasted over a local business." },
  { icon:"💰", title:"Premium quality, honest price", desc:"Agency-level output without agency-level overhead. You invest in results, not office space and account managers." },
  { icon:"📈", title:"Conversion-driven design",    desc:"Every element is designed to guide your visitor toward a decision — inquiry, purchase, or contact. Good-looking sites that also sell." },
  { icon:"⚡", title:"Execution over excuses",      desc:"We deliver on time, every time. Our process is built around clear milestones so your project never disappears into a black hole." },
];
export default function WhyUs() {
  return (
    <section id="why-us" style={{ ...sec("#0D0D0D"), position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"rgba(200,151,58,.04)", filter:"blur(120px)", pointerEvents:"none" }} />
      <div style={{ ...wrap, position:"relative" }}>
        <SectionHeader label="Why Mufasa Studio" title={<>The studio that treats<br/><GradText>your business like ours.</GradText></>} sub="Working with a creative agency shouldn't feel like a gamble. Here's what makes us different." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, marginBottom:28 }}>
          {reasons.map((r,i)=>(
            <Fade key={r.title} delay={i*70}>
              <div style={{ border:"1px solid rgba(255,255,255,.06)", borderRadius:2, padding:28, transition:"all .3s" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(200,151,58,.25)"; el.style.transform="translateY(-4px)"; el.style.background="rgba(200,151,58,.02)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; el.style.background="transparent"; }}>
                <div style={{ fontSize:26, marginBottom:16 }}>{r.icon}</div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:17, marginBottom:10 }}>{r.title}</h3>
                <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.7 }}>{r.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={250}>
          <div style={{ border:"1px solid rgba(200,151,58,.15)", borderRadius:2, padding:"clamp(24px,4vw,40px)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:24, background:"rgba(200,151,58,.03)" }}>
            <div>
              <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:22, marginBottom:8 }}>Ready to see what's possible?</h3>
              <p style={{ color:"#8A8478", fontSize:14 }}>Book a free 30-minute discovery call. No pitch, no pressure — just a conversation about your business.</p>
            </div>
            <a href="#contact" style={{ flexShrink:0, background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"14px 28px", borderRadius:2, textDecoration:"none", whiteSpace:"nowrap", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background=G; e.currentTarget.style.transform="translateY(0)"; }}>
              Book a Free Call →
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
