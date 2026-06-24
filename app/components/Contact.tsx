"use client";
import { useState } from "react";
import { Fade, G, GradText, sec, wrap } from "./shared";
import {Mail, MessageCircle, MapPin} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", service:"", budget:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");
  const submit = (e:React.FormEvent) => { e.preventDefault(); setStatus("sending"); setTimeout(()=>setStatus("sent"),1400); };
  const inp:React.CSSProperties = { width:"100%", background:"rgba(0,0,0,.4)", border:"1px solid rgba(255,255,255,.08)", borderRadius:2, padding:"12px 16px", color:"#F0EDE6", fontSize:14, fontFamily:"'DM Sans',sans-serif", fontWeight:300, outline:"none", transition:"border-color .3s", boxSizing:"border-box" };
  const focus = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor="rgba(200,151,58,.5)");
  const blur  = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor="rgba(255,255,255,.08)");

  return (
    <section id="contact" style={{ ...sec("#0D0D0D"), position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:700, height:350, borderRadius:"0 0 50% 50%", background:"rgba(200,151,58,.05)", filter:"blur(100px)", pointerEvents:"none" }} />
      <div style={{ ...wrap, position:"relative" }}>
        {/* Banner */}
        <Fade style={{ textAlign:"center", marginBottom:80 }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:G, letterSpacing:".12em", textTransform:"uppercase", display:"block", marginBottom:20 }}>Start Today</span>
          <h2 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, fontSize:"clamp(2.2rem,6vw,4.5rem)", lineHeight:1.1, marginBottom:20 }}>
            <span style={{ color:"#F0EDE6" }}>Your business deserves<br/></span>
            <GradText>more than an outdated</GradText>
            <br/><span style={{ color:"#F0EDE6" }}>online presence.</span>
          </h2>
          <p style={{ color:"#8A8478", maxWidth:480, margin:"0 auto 32px", lineHeight:1.7, fontSize:15 }}>Every day you wait is a day a competitor with better branding wins your customer. Let's change that.</p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:16 }}>
            <a href="#contact-form" style={{ display:"inline-flex", alignItems:"center", gap:8, background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"16px 32px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background=G; e.currentTarget.style.transform="translateY(0)"; }}>
              Start Your Project →
            </a>
            <a href="https://wa.me/2348147952121" target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, border:"1px solid rgba(255,255,255,.12)", color:"#F0EDE6", fontSize:14, padding:"16px 32px", borderRadius:2, textDecoration:"none", transition:"all .3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(200,151,58,.4)"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(255,255,255,.12)"; e.currentTarget.style.transform="translateY(0)"; }}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </Fade>

        {/* Form */}
        <div id="contact-form" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:48, alignItems:"start" }}>
          <Fade>
            <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
              <div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:24, marginBottom:10 }}>Let's talk about your project.</h3>
                <p style={{ color:"#8A8478", fontSize:14, lineHeight:1.7 }}>Fill in the form and we'll come back to you within 24 hours with a clear plan and fair quote. No obligations.</p>
              </div>
              {[{icon:Mail ,l:"Email",v:"mufasastudio@gmail.com"},{icon:MessageCircle,l:"WhatsApp",v:"+234 814 795 2121"},{icon: MapPin,l:"Location",v:"Lagos, Nigeria"}].map(d=>(
                <div key={d.l} style={{ display:"flex", alignItems:"flex-start", gap:14, border:"1px solid rgba(255,255,255,.05)", borderRadius:2, padding:14 }}>
                  <div style={{ width:34, height:34, background:"rgba(200,151,58,.1)", borderRadius:2, display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, flexShrink:0 }}>{d.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:2 }}>{d.l}</div>
                    <div style={{ color:"#F0EDE6", fontSize:14 }}>{d.v}</div>
                  </div>
                </div>
              ))}
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
                <span style={{ color:"#8A8478", fontSize:13 }}>Usually responds within 2–4 hours</span>
              </div>
            </div>
          </Fade>

          <Fade delay={100}>
            {status==="sent" ? (
              <div style={{ border:"1px solid rgba(200,151,58,.3)", background:"rgba(200,151,58,.05)", borderRadius:2, padding:48, textAlign:"center" }}>
                <div style={{ fontSize:40, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"'Playfair Display',Georgia,serif", fontWeight:700, color:"#F0EDE6", fontSize:24, marginBottom:10 }}>Message received!</h3>
                <p style={{ color:"#8A8478", fontSize:14 }}>We'll review your project and get back to you within 24 hours with a personalised response.</p>
              </div>
            ):(
              <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                  <div><label style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", display:"block", marginBottom:7 }}>Full Name</label><input required style={inp} placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} onFocus={focus} onBlur={blur}/></div>
                  <div><label style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", display:"block", marginBottom:7 }}>Email</label><input required type="email" style={inp} placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} onFocus={focus} onBlur={blur}/></div>
                </div>
                <div><label style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", display:"block", marginBottom:7 }}>Service Needed</label>
                  <select required style={{ ...inp, appearance:"none" }} value={form.service} onChange={e=>setForm({...form,service:e.target.value})} onFocus={focus} onBlur={blur}>
                    <option value="" disabled>Select a service...</option>
                    {["Web Design & Development","Brand Identity Design","Social Media Management","UI / UX Design","SEO & Growth","Full Growth Package","Something else"].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", display:"block", marginBottom:7 }}>Budget Range</label>
                  <select style={{ ...inp, appearance:"none" }} value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} onFocus={focus} onBlur={blur}>
                    <option value="">Select a range...</option>
                    {["Under ₦100,000","₦100,000 – ₦250,000","₦250,000 – ₦500,000","₦500,000 – ₦1,000,000","₦1,000,000+"].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:"rgba(138,132,120,.45)", letterSpacing:".1em", textTransform:"uppercase", display:"block", marginBottom:7 }}>Tell Us About Your Project</label>
                  <textarea required rows={4} style={{ ...inp, resize:"none" }} placeholder="What does your business do? What problem are you trying to solve?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} onFocus={focus} onBlur={blur}/>
                </div>
                <button type="submit" disabled={status==="sending"} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, background:G, color:"#0D0D0D", fontWeight:500, fontSize:14, padding:"16px", borderRadius:2, border:"none", cursor:"pointer", transition:"all .3s", opacity:status==="sending"?.7:1 }}
                  onMouseEnter={e=>{ if(status!=="sending"){ e.currentTarget.style.background="#E2B660"; e.currentTarget.style.transform="translateY(-1px)"; } }}
                  onMouseLeave={e=>{ e.currentTarget.style.background=G; e.currentTarget.style.transform="translateY(0)"; }}>
                  {status==="sending"?"Sending...":"Send Message ✈️"}
                </button>
                <p style={{ color:"rgba(138,132,120,.35)", fontSize:11, textAlign:"center" }}>No spam. No commitment. Just a conversation.</p>
              </form>
            )}
          </Fade>
        </div>
      </div>
    </section>
  );
}
