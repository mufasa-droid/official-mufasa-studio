"use client";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";

const testimonials = [
  { name:"Adaeze Okonkwo", role:"CEO, Lagos Fashion House", initials:"AO", quote:"Mufasa Studio completely transformed our online presence. Our website went from forgettable to one our competitors study. Sales have tripled in four months.", result:"3× revenue increase" },
  { name:"Kelechi Madu",   role:"Founder, Apex Logistics",  initials:"KM", quote:"The team understood our brand vision in the first call. They delivered an identity that commands respect from enterprise clients. Worth every naira.", result:"Won ₦50M contract" },
  { name:"Fatima Ibrahim", role:"Owner, GreenLife Foods",    initials:"FI", quote:"Our Instagram grew from 200 to 8,000 followers in 3 months. Mufasa's content strategy brought us customers we could never have reached before.", result:"8K followers, 40% more orders" },
];
const logos = ["Apex Co.","StyleHaus","PaySwift","GreenLife","Zuri Beauty","Urban Eats"];

export default function Trust() {
  return (
    <section id="trust" style={sec("#111111")}>
      <div style={wrap}>
        <Fade style={{ textAlign:"center", marginBottom:56 }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:G, letterSpacing:".12em", textTransform:"uppercase", display:"block", marginBottom:14 }}>Social Proof</span>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2rem,5vw,3.5rem)", color:"#F0EDE6", marginBottom:14, lineHeight:1.1 }}>Real businesses.<br/><GradText>Real results.</GradText></h2>
          <p style={{ color:"#8A8478", maxWidth:400, margin:"0 auto", fontSize:15 }}>Don't take our word for it. Here's what happens when African businesses invest in world-class design.</p>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20, marginBottom:60 }}>
          {testimonials.map((t,i) => (
            <Fade key={t.name} delay={i*120}>
              <div style={{ border:"1px solid rgba(255,255,255,.06)", background:"rgba(0,0,0,.3)", borderRadius:2, padding:28, display:"flex", flexDirection:"column", height:"100%", transition:"all .3s" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(200,151,58,.25)"; el.style.transform="translateY(-4px)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; }}>
                <svg width="24" height="18" viewBox="0 0 32 24" fill={G} opacity=".3" style={{ marginBottom:20, flexShrink:0 }}><path d="M0 24V14C0 6.3 4.7 1.4 14 0l2 3C10.3 4.3 8 7 8 10v1h6v13H0zm18 0V14C18 6.3 22.7 1.4 32 0l2 3C28.3 4.3 26 7 26 10v1h6v13H18z"/></svg>
                <p style={{ color:"rgba(240,237,230,.8)", fontSize:14, lineHeight:1.75, flex:1, marginBottom:22, fontWeight:300, fontStyle:"italic" }}>"{t.quote}"</p>
                <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:18 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                    <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(200,151,58,.15)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontSize:13, fontWeight:700, color:G, flexShrink:0 }}>{t.initials}</div>
                    <div>
                      <div style={{ color:"#F0EDE6", fontSize:13, fontWeight:500 }}>{t.name}</div>
                      <div style={{ color:"#8A8478", fontSize:11 }}>{t.role}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                    {[...Array(5)].map((_,i)=><svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={G}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:G, marginLeft:6 }}>· {t.result}</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <Fade>
          <div style={{ textAlign:"center" }}>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"#8A8478", letterSpacing:".12em", textTransform:"uppercase", marginBottom:28 }}>Trusted by growing businesses</p>
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"16px 40px" }}>
              {logos.map(l=><div key={l} style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"rgba(138,132,120,.35)", letterSpacing:".04em" }}>{l}</div>)}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
