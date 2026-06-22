"use client";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";
const steps = [
  { num:"01", title:"Discovery",   dur:"Week 1",   desc:"We start by understanding your business deeply — goals, audience, competitors. No assumptions.", detail:"Discovery call · Competitor analysis · Goal mapping · Scope" },
  { num:"02", title:"Strategy",    dur:"Week 1–2", desc:"Before any design, we map brand positioning, site architecture, and content hierarchy — all with purpose.", detail:"Brand positioning · Sitemap · Content strategy · Direction" },
  { num:"03", title:"Design",      dur:"Week 2–3", desc:"Mood boards, wireframes, and high-fidelity designs refined with your feedback until it's perfect.", detail:"Mood board · Wireframes · UI design · Client review rounds" },
  { num:"04", title:"Development", dur:"Week 3–5", desc:"Clean, fast, accessible code. Built mobile-first with performance and SEO baked in from the start.", detail:"Responsive build · SEO setup · Performance · CMS integration" },
  { num:"05", title:"Launch",      dur:"Week 5–6", desc:"Thorough testing, final review, then a clean launch with zero downtime and full handover.", detail:"QA testing · Client sign-off · DNS setup · Go live" },
  { num:"06", title:"Growth",      dur:"Ongoing",  desc:"We don't disappear after launch. Monthly retainers for support, analytics, and growth improvements.", detail:"Analytics · Monthly updates · SEO monitoring · Consulting" },
];
export default function Process() {
  return (
    <section id="process" style={sec("#111111")}>
      <div style={wrap}>
        <SectionHeader label="How We Work" title={<>From idea to launch<br/><GradText>in six clear steps.</GradText></>} sub="A structured process that keeps you informed at every stage and eliminates surprises." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:28 }}>
          {steps.map((s,i)=>(
            <Fade key={s.num} delay={i*70}>
              <div style={{ position:"relative" }}
                onMouseEnter={e=>{ const c=e.currentTarget.querySelector(".circle") as HTMLElement; if(c){ c.style.borderColor="rgba(200,151,58,.7)"; c.style.background="rgba(200,151,58,.07)"; } }}
                onMouseLeave={e=>{ const c=e.currentTarget.querySelector(".circle") as HTMLElement; if(c){ c.style.borderColor="rgba(200,151,58,.2)"; c.style.background="transparent"; } }}>
                <div className="circle" style={{ width:52, height:52, border:"1px solid rgba(200,151,58,.2)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:18, background:"transparent", transition:"all .3s" }}>
                  <span style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:16, color:G }}>{s.num}</span>
                </div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.4)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:6 }}>{s.dur}</div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:16, marginBottom:10 }}>{s.title}</h3>
                <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.65, marginBottom:8 }}>{s.desc}</p>
                <div style={{ fontSize:11, color:"rgba(138,132,120,.38)", lineHeight:1.6 }}>{s.detail}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
