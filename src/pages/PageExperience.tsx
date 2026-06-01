import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/data/resume";

export default function PageExperience() {
  const [open, setOpen] = useState<string|null>(null);
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });

  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#e8f4f8", display:"flex", overflow:"hidden" }}>

      {/* LEFT — fixed label panel */}
      <div style={{ width:300, flexShrink:0, display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 32px 40px 100px", borderRight:"1px solid rgba(0,188,212,0.15)" }}>
        <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
          <span className="plus" style={{ top:"20%", left:"8%", position:"absolute" }}>+</span>
          <div className="dot-grid" style={{ top:"25%", left:"10%", position:"absolute" }} />
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:12, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const }}>EXPERIENCE</span>
          </div>
          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(36px,4vw,56px)", lineHeight:1.0, letterSpacing:"-0.02em", color:"var(--text)", marginBottom:16 }}>
            Where<br/>I've<br/>Worked
          </h2>
          <p style={{ fontSize:12, color:"var(--text-light)", lineHeight:1.75 }}>Click each role to expand details and tech stack.</p>
        </motion.div>
      </div>

      {/* RIGHT — scrollable accordion list */}
      <div style={{ flex:1, height:"100vh", overflowY:"auto", paddingTop:80, paddingBottom:40, paddingRight:80, paddingLeft:40 }}>
        {experience.map((job,i)=>{
          const isOpen = open===job.id;
          return (
            <motion.div key={job.id}
              initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.08 }}
              style={{ borderTop:"1px solid rgba(0,0,0,0.08)" }}>

              {/* Row header — always visible */}
              <div
                onClick={()=>setOpen(isOpen?null:job.id)}
                style={{ display:"grid", gridTemplateColumns:"40px 1fr auto 40px", alignItems:"center", gap:16, padding:"22px 0", cursor:"pointer" }}>
                <span style={{ fontSize:12, color:"var(--muted)", fontWeight:600, fontFamily:"var(--sans)" }}>0{i+1}</span>
                <div>
                  <div style={{ fontSize:"clamp(16px,1.8vw,20px)", fontWeight:700, color:"var(--text)", marginBottom:4, fontFamily:"var(--sans)" }}>{job.role}</div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:12 }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:job.color, display:"inline-block", flexShrink:0 }}/>
                    <span style={{ color:job.color }}>{job.company}</span>
                    <span style={{ color:"var(--muted)" }}>· {job.location}</span>
                  </div>
                </div>
                <span style={{ fontSize:11, color:"var(--muted)", whiteSpace:"nowrap" as const }}>{job.period}</span>
                <div style={{ width:32, height:32, borderRadius:"50%", background:isOpen?"var(--teal)":"transparent", border:`2px solid ${isOpen?"var(--teal)":"rgba(0,0,0,0.15)"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"all 0.3s" }}>
                  <motion.span animate={{ rotate:isOpen?45:0 }} transition={{ duration:0.25 }}
                    style={{ display:"block", lineHeight:1, fontSize:18, color:isOpen?"#fff":"var(--text)", marginTop:-1 }}>+</motion.span>
                </div>
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:"auto", opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:0.35, ease:[0.16,1,0.3,1] as [number,number,number,number] }}
                    style={{ overflow:"hidden" }}>
                    <div style={{ padding:"0 0 24px 56px" }}>
                      <div style={{ background:"rgba(0,188,212,0.05)", border:"1px solid rgba(0,188,212,0.15)", borderRadius:10, padding:"20px 24px", display:"grid", gridTemplateColumns:"1fr 280px", gap:24 }}>
                        {/* Highlights */}
                        <div>
                          <div style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const, marginBottom:12, fontWeight:600 }}>Highlights</div>
                          <div style={{ display:"flex", flexDirection:"column" as const, gap:8 }}>
                            {job.highlights.slice(0,4).map((h,j)=>(
                              <div key={j} style={{ display:"flex", gap:10, fontSize:12, color:"var(--text-light)", lineHeight:1.6 }}>
                                <span style={{ color:"var(--teal)", flexShrink:0, marginTop:2 }}>→</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Stack */}
                        <div>
                          <div style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const, marginBottom:12, fontWeight:600 }}>Tech Stack</div>
                          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6 }}>
                            {job.tags.map(t=>(
                              <span key={t} style={{ fontSize:11, padding:"4px 10px", borderRadius:100, background:"rgba(0,188,212,0.1)", color:"var(--teal2)", border:"1px solid rgba(0,188,212,0.2)", whiteSpace:"nowrap" as const }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div style={{ borderTop:"1px solid rgba(0,0,0,0.08)" }}/>
        <div style={{ height:40 }}/>
      </div>
    </div>
  );
}
