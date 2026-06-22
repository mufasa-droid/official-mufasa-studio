"use client";
import { Fade, G, GradText, SectionHeader, sec, wrap } from "./shared";
const clients = [
  { icon:, title:"Startups",          problem:"No credibility yet",           solution:"We build brand identities and websites that make you look established from day one — so investors and customers take you seriously.", accent:"rgba(59,130,246,.1)" },
  { icon:"👗", title:"Fashion Brands",     problem:"Lost in a crowded market",     solution:"We craft visual identities and online stores that make your brand impossible to scroll past — turning followers into paying customers.", accent:"rgba(236,72,153,.08)" },
  { icon:"🍽️", title:"Restaurants",        problem:"Empty tables, weak social",    solution:"We create appetising digital experiences — from branding to social media — that fill your tables and build a loyal community.", accent:"rgba(249,115,22,.08)" },
  { icon:"👤", title:"Personal Brands",    problem:"Struggling to stand out",      solution:"We position you as the authority in your space with a personal brand, website, and content strategy that opens doors.", accent:"rgba(168,85,247,.08)" },
  { icon:"💼", title:"SMEs & Businesses",  problem:"Looking amateur online",        solution:"We transform your digital presence so you can compete with larger competitors and win clients who previously overlooked you.", accent:"rgba(34,197,94,.08)" },
  { icon:"📸", title:"Creators",           problem:"Undercharging for your work",   solution:"We build premium personal brands and media kits that justify higher rates and attract brand partnerships worth your actual value.", accent:"rgba(234,179,8,.08)" },
];
export default function WhoWeHelp() {
  return (
    <section id="who-we-help" style={sec("#0D0D0D")}>
      <div style={wrap}>
        <SectionHeader label="Who We Help" title={<>Built for businesses<br/><GradText>ready to grow.</GradText></>} sub="Whether you're just starting or ready to scale, we meet you where you are and take you where you want to go." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
          {clients.map((c,i)=>(
            <Fade key={c.title} delay={i*70}>
              <div style={{ border:"1px solid rgba(255,255,255,.06)", background:c.accent, borderRadius:2, padding:28, transition:"all .35s", cursor:"default" }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(200,151,58,.3)"; el.style.transform="translateY(-5px)"; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor="rgba(255,255,255,.06)"; el.style.transform="translateY(0)"; }}>
                <div style={{ fontSize:28, marginBottom:18 }}>{c.icon}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"rgba(138,132,120,.5)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:6 }}>Problem</div>
                <div style={{ color:"rgba(138,132,120,.7)", fontSize:13, fontStyle:"italic", marginBottom:14 }}>"{c.problem}"</div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:20, marginBottom:10 }}>{c.title}</h3>
                <p style={{ color:"#8A8478", fontSize:13, lineHeight:1.7 }}>{c.solution}</p>
                <div style={{ marginTop:20, color:G, fontSize:12, fontWeight:500 }}>See how we help →</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
