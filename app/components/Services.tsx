"use client";
import { useState } from "react";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";
const services = [
  { num:"01", icon:"🖥️", title:"Web Design & Development",  problem:"Your website isn't converting visitors into customers.", solution:"We design and build fast, mobile-first websites engineered to convert — from landing pages to full e-commerce stores.", outcomes:["Mobile-first responsive design","3× faster load times","Conversion-optimised layouts","CMS integration"], tags:["React","Next.js","E-commerce","CMS"] },
  { num:"02", icon:"🎨", title:"Brand Identity Design",       problem:"You blend in instead of standing out.",                solution:"We craft complete brand identities — logo, colours, typography, and guidelines — that make your business impossible to forget.", outcomes:["Logo + full brand system","Colour & typography guide","Brand guidelines document","Print & digital assets"], tags:["Logo","Brand Guide","Print","Digital"] },
  { num:"03", icon:"📐", title:"UI / UX Design",              problem:"Your digital product confuses users who then drop off.", solution:"Research-led UX design and polished interfaces that users actually enjoy — reducing friction and increasing retention.", outcomes:["User research & journey mapping","Wireframes & prototypes","Design systems","Figma handoff"], tags:["Figma","Prototypes","Research","Systems"] },
  { num:"04", icon:"📱", title:"Social Media Management",     problem:"You post inconsistently and see little engagement.",    solution:"A complete social media engine — content strategy, post design, scheduling, and paid ad management that grows your audience.", outcomes:["Content strategy & calendar","12+ designed posts/month","Paid ad management","Monthly analytics"], tags:["Strategy","Content","Ads","Analytics"] },
  { num:"05", icon:"🔍", title:"SEO & Growth",                problem:"Customers can't find you on Google.",                  solution:"Technical SEO, keyword strategy, and performance optimisation that moves you up the rankings and drives consistent organic traffic.", outcomes:["Technical SEO audit","Keyword strategy","Speed optimisation","Monthly rank tracking"], tags:["Technical SEO","Keywords","Speed","Rankings"] },
  { num:"06", icon:"🛡️", title:"Website Maintenance",         problem:"Your site breaks and clients tell you before you know.", solution:"Monthly retainers to keep your website fast, secure, and updated — so you focus on running your business, not your site.", outcomes:["Security monitoring","Content updates","Speed optimisation","Priority support"], tags:["Security","Updates","Hosting","Support"] },
];
export default function Services() {
  const [active, setActive] = useState<number|null>(null);
  return (
    <section id="services" style={sec("#111111")}>
      <div style={wrap}>
        <SectionHeader label="What We Do" title={<>Services built for<br/><GradText>real business growth.</GradText></>} sub="Every service is designed around one goal: growing your business. Not just making it look good." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:1, background:"rgba(255,255,255,.05)", borderRadius:2, overflow:"hidden" }}>
          {services.map((s,i)=>(
            <Fade key={s.num} delay={i*50}>
              <div onClick={()=>setActive(active===i?null:i)}
                style={{ background:active===i?"#1A1A1A":"#111111", padding:28, display:"flex", flexDirection:"column", cursor:"pointer", transition:"background .3s", position:"relative", overflow:"hidden" }}
                onMouseEnter={e=>{ if(active!==i)(e.currentTarget as HTMLElement).style.background="#161616"; }}
                onMouseLeave={e=>{ if(active!==i)(e.currentTarget as HTMLElement).style.background="#111111"; }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:G, transform:active===i?"scaleX(1)":"scaleX(0)", transformOrigin:"left", transition:"transform .3s" }} />
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18 }}>
                  <div style={{ fontSize:22 }}>{s.icon}</div>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(138,132,120,.35)" }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:17, marginBottom:8 }}>{s.title}</h3>
                <p style={{ color:"rgba(138,132,120,.6)", fontSize:12, fontStyle:"italic", marginBottom:10 }}>"{s.problem}"</p>
                <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.7, flex:1 }}>{s.solution}</p>
                <div style={{ overflow:"hidden", maxHeight:active===i?200:0, transition:"max-height .4s ease", marginTop:active===i?16:0 }}>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:14 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(200,151,58,.6)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:10 }}>What you get</div>
                    {s.outcomes.map(o=>(
                      <div key={o} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6, fontSize:12, color:"#8A8478" }}>
                        <span style={{ width:4, height:4, borderRadius:"50%", background:G, flexShrink:0 }} />{o}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop:16, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ display:"flex", gap:6 }}>
                    {s.tags.slice(0,2).map(t=><span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", border:"1px solid rgba(255,255,255,.08)", borderRadius:99, padding:"2px 9px", letterSpacing:".06em" }}>{t}</span>)}
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={active===i?G:"rgba(138,132,120,.35)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition:"stroke .3s" }}><path d="M7 17L17 7M7 7h10v10"/></svg>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={150} style={{ marginTop:40, textAlign:"center" }}>
          <a href="#contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"14px 32px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
            onMouseEnter={e=>{ e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.background=G; e.currentTarget.style.transform="translateY(0)"; }}>
            Start a Project →
          </a>
        </Fade>
      </div>
    </section>
  );
}
