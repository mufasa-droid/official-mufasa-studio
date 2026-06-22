"use client";
import { Fade, G, GradText, sec, wrap } from "./shared";
const plans = [
  { name:"Starter", price:"150K", type:"one-off", desc:"Perfect for new businesses that need a clean, credible online presence fast.", featured:false, features:[{t:"5-page responsive website",y:true},{t:"Mobile-first design",y:true},{t:"Contact form + WhatsApp CTA",y:true},{t:"Basic SEO setup",y:true},{t:"2-week delivery",y:true},{t:"Brand identity included",y:false},{t:"E-commerce functionality",y:false}], cta:"Get Started" },
  { name:"Growth",  price:"350K", type:"one-off", desc:"For serious businesses ready for a complete brand and digital transformation.", featured:true, features:[{t:"10-page custom website",y:true},{t:"Full brand identity (logo + guide)",y:true},{t:"Custom UI/UX design",y:true},{t:"Advanced SEO setup",y:true},{t:"1 month social media content",y:true},{t:"3–4 week delivery",y:true},{t:"E-commerce functionality",y:false}], cta:"Get Started" },
  { name:"Retainer",price:"80K",  type:"/ month", desc:"Ongoing social media, content, ads, and website maintenance. We stay with you.", featured:false, features:[{t:"12 designed posts/month",y:true},{t:"Story + reel graphics",y:true},{t:"Ad management",y:true},{t:"Monthly analytics report",y:true},{t:"Website updates & security",y:true},{t:"Priority support (24h response)",y:true},{t:"New website builds",y:false}], cta:"Start Retainer" },
];
export default function Pricing() {
  return (
    <section id="pricing" style={sec("#111111")}>
      <div style={wrap}>
        <Fade style={{ textAlign:"center", marginBottom:56 }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:G, letterSpacing:".12em", textTransform:"uppercase", display:"block", marginBottom:14 }}>Pricing</span>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2rem,5vw,3.5rem)", color:"#F0EDE6", marginBottom:14, lineHeight:1.1 }}>Agency quality.<br/><GradText>Honest pricing.</GradText></h2>
          <p style={{ color:"#8A8478", maxWidth:400, margin:"0 auto", fontSize:15 }}>Transparent, flat-rate packages. No hidden fees, no confusing quotes.</p>
        </Fade>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16, alignItems:"stretch" }}>
          {plans.map((p,i)=>(
            <Fade key={p.name} delay={i*90}>
              <div style={{ position:"relative", display:"flex", flexDirection:"column", border:p.featured?"1px solid rgba(200,151,58,.5)":"1px solid rgba(255,255,255,.06)", borderRadius:2, padding:28, background:p.featured?"rgba(200,151,58,.04)":"rgba(0,0,0,.2)", transition:"all .3s", height:"100%" }}
                onMouseEnter={e=>{ if(!p.featured)(e.currentTarget as HTMLElement).style.borderColor="rgba(200,151,58,.2)"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
                onMouseLeave={e=>{ if(!p.featured)(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.06)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}>
                {p.featured && <div style={{ position:"absolute", top:-1, left:"50%", transform:"translateX(-50%)", background:G, color:"#0D0D0D", fontSize:10, fontFamily:"'DM Mono',monospace", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"4px 16px", borderRadius:"0 0 4px 4px" }}>Most Popular</div>}
                <div style={{ marginBottom:24 }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(138,132,120,.45)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:12 }}>{p.name}</div>
                  <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:8 }}>
                    <span style={{ color:G, fontSize:16, fontWeight:500 }}>₦</span>
                    <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2rem,4vw,2.8rem)", color:"#F0EDE6", lineHeight:1 }}>{p.price}</span>
                    <span style={{ color:"#8A8478", fontSize:14, marginLeft:4 }}>{p.type}</span>
                  </div>
                  <p style={{ color:"#8A8478", fontSize:14, lineHeight:1.6 }}>{p.desc}</p>
                </div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:12, flex:1, marginBottom:24, borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:20 }}>
                  {p.features.map(f=>(
                    <li key={f.t} style={{ display:"flex", alignItems:"flex-start", gap:12, fontSize:13 }}>
                      {f.y ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, marginTop:1 }}><polyline points="20 6 9 17 4 12"/></svg>
                           : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(138,132,120,.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0, marginTop:1 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
                      <span style={{ color:f.y?"rgba(240,237,230,.8)":"rgba(138,132,120,.3)" }}>{f.t}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"14px", borderRadius:2, fontSize:14, fontWeight:500, textDecoration:"none", transition:"all .3s", background:p.featured?G:"transparent", color:p.featured?"#0D0D0D":"#F0EDE6", border:p.featured?"none":"1px solid rgba(255,255,255,.12)" }}
                  onMouseEnter={e=>{ e.currentTarget.style.background=p.featured?"#E2B660":"rgba(200,151,58,.1)"; if(!p.featured)e.currentTarget.style.borderColor="rgba(200,151,58,.4)"; e.currentTarget.style.color=p.featured?"#0D0D0D":G; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background=p.featured?G:"transparent"; if(!p.featured)e.currentTarget.style.borderColor="rgba(255,255,255,.12)"; e.currentTarget.style.color=p.featured?"#0D0D0D":"#F0EDE6"; }}>
                  {p.cta} →
                </a>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={150}><p style={{ textAlign:"center", color:"rgba(138,132,120,.35)", fontSize:12, marginTop:24 }}>All prices in Nigerian Naira. Custom enterprise quotes available. <a href="#contact" style={{ color:"rgba(200,151,58,.55)", textDecoration:"none" }}>Contact us →</a></p></Fade>
      </div>
    </section>
  );
}
