"use client";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";
const cases = [
  { industry:"Fashion & Retail", client:"StyleHaus Lagos", challenge:"An established Lagos fashion brand with a beautiful product but a website that looked like it was built in 2010. Zero social presence. Losing customers to competitors with inferior products but better branding.", solution:"Complete brand overhaul — new visual identity, e-commerce website built on Next.js, and a 90-day social media launch strategy targeting fashion-forward Lagos professionals.", results:[{m:"300%",l:"Revenue increase"},{m:"12K",l:"New Instagram followers"},{m:"2.1×",l:"Average order value"}], tags:["Brand Identity","E-commerce","Social Media"], accent:"#C8973A" },
  { industry:"Logistics & B2B",  client:"Apex Logistics",  challenge:"A growing logistics company winning work through referrals but losing enterprise contracts due to an unprofessional digital presence. Their website didn't reflect the scale of operations they were capable of.", solution:"Repositioned the brand to target enterprise clients. New logo, brand identity system, corporate website, and pitch deck design that communicated reliability and scale.", results:[{m:"₦50M",l:"Contract secured"},{m:"4",l:"Enterprise clients added"},{m:"85%",l:"Increase in RFP responses"}], tags:["Brand Strategy","Web Design","Corporate Identity"], accent:"#60A5FA" },
  { industry:"Food & Restaurant", client:"GreenLife Foods", challenge:"A premium healthy food brand stuck at ₦200k monthly revenue. Their social media was inconsistent and their website had no online ordering capability.", solution:"Built a full-featured ordering website, redesigned their visual identity to feel premium, and launched a content-driven Instagram strategy built around food storytelling.", results:[{m:"8,000",l:"Instagram followers"},{m:"40%",l:"More monthly orders"},{m:"₦800K",l:"Monthly revenue"}], tags:["Web Design","Social Media","Brand Identity"], accent:"#34D399" },
];
export default function Work() {
  return (
    <section id="work" style={sec("#0D0D0D")}>
      <div style={wrap}>
        <SectionHeader label="Case Studies" title={<>Not a portfolio.<br/><GradText>A track record.</GradText></>} sub="Every project came with a real business challenge. Here's how we solved it — and what happened next." />
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {cases.map((c,i)=>(
            <Fade key={c.client} delay={i*80}>
              <div style={{ border:"1px solid rgba(255,255,255,.06)", background:"rgba(17,17,17,.5)", borderRadius:2, overflow:"hidden", transition:"all .4s" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.12)"; el.style.transform="translateY(-3px)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; }}>
                <div style={{ padding:"clamp(24px,4vw,40px)" }}>
                  <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"flex-start", gap:16, marginBottom:28 }}>
                    <div>
                      <span style={{ display:"inline-block", fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:".1em", textTransform:"uppercase", padding:"3px 12px", borderRadius:99, border:`1px solid ${c.accent}40`, color:c.accent, marginBottom:10 }}>{c.industry}</span>
                      <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:"clamp(1.4rem,3vw,2rem)" }}>{c.client}</h3>
                    </div>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                      {c.tags.map(t=><span key={t} style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(138,132,120,.45)", border:"1px solid rgba(255,255,255,.08)", borderRadius:99, padding:"3px 12px" }}>{t}</span>)}
                    </div>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:24, marginBottom:28 }}>
                    <div>
                      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:10 }}>The Challenge</div>
                      <p style={{ color:"#8A8478", fontSize:14, lineHeight:1.7 }}>{c.challenge}</p>
                    </div>
                    <div>
                      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:10 }}>Our Solution</div>
                      <p style={{ color:"#8A8478", fontSize:14, lineHeight:1.7 }}>{c.solution}</p>
                    </div>
                  </div>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,.05)", paddingTop:24 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:".1em", textTransform:"uppercase", color:c.accent }}>Results</span>
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
                      {c.results.map(r=>(
                        <div key={r.l}>
                          <div style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(1.5rem,3vw,2.2rem)", color:c.accent, marginBottom:4 }}>{r.m}</div>
                          <div style={{ color:"#8A8478", fontSize:12 }}>{r.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={100} style={{ marginTop:48, textAlign:"center" }}>
          <p style={{ color:"#8A8478", fontSize:14, marginBottom:18 }}>Your business could be our next case study.</p>
          <a href="#contact" style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1px solid rgba(200,151,58,.3)", color:G, fontSize:14, fontWeight:500, padding:"12px 28px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=G; e.currentTarget.style.transform="translateY(-2px)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(200,151,58,.3)"; e.currentTarget.style.transform="translateY(0)"; }}>
            Start Your Project →
          </a>
        </Fade>
      </div>
    </section>
  );
}
