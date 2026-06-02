import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal, stats } from "@/data/resume";

export default function PageHome() {
  const [roleText, setRoleText] = useState("");
  const [roleIdx,  setRoleIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = ["8+ Yrs · PayPal · Banking · Healthcare","Senior Software Engineer","Full Stack Developer","Senior Java Developer","Cloud & Microservices Architect"];

  useEffect(() => {
    const cur = roles[roleIdx];
    const t = setTimeout(() => {
      if (!deleting) {
        setRoleText(cur.slice(0, charIdx+1));
        if (charIdx+1===cur.length) setTimeout(()=>setDeleting(true),2000);
        else setCharIdx(c=>c+1);
      } else {
        setRoleText(cur.slice(0, charIdx-1));
        if (charIdx-1===0) { setDeleting(false); setRoleIdx(i=>(i+1)%roles.length); setCharIdx(0); }
        else setCharIdx(c=>c-1);
      }
    }, deleting?40:70);
    return ()=>clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx,deleting,roleIdx]);

  return (
    <div style={{ width:"100vw", height:"100vh", display:"grid", gridTemplateColumns:"53% 47%", background:"var(--bg)", position:"relative", overflow:"hidden" }}>

      {/* Decorative elements */}
      <div className="circle-deco" style={{ width:300, height:300, top:"5%", left:"5%", borderColor:"rgba(0,188,212,0.15)" }} />
      <div className="circle-deco" style={{ width:200, height:200, top:"12%", left:"12%", borderColor:"rgba(0,188,212,0.1)" }} />
      <span className="plus" style={{ top:"28%", left:"14%" }}>+</span>
      <span className="plus" style={{ top:"35%", left:"22%" }}>+</span>
      <div className="dot-grid" style={{ top:"30%", left:"16%" }} />
      <div className="dot-grid" style={{ bottom:"15%", left:"35%" }} />

      {/* LEFT — Content */}
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"64px 40px 24px 100px", position:"relative", zIndex:2 }}>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
          style={{ marginBottom:4 }}>
          <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:12 }}>
            <div style={{ width:56, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:18, fontWeight:600, color:"var(--text)" }}>Hi, my name is</span>
          </div>
          <div style={{ fontSize:13, color:"var(--text-light)", marginBottom:4 }}>
            {roleText}<span style={{ borderRight:"2px solid var(--pink)", marginLeft:2 }}>&nbsp;</span>
          </div>
        </motion.div>

        {/* Big name */}
        <div style={{ overflow:"visible", paddingBottom:"8px", marginBottom:16 }}>
          <motion.h1 initial={{ y:"100%" }} animate={{ y:0 }} transition={{ duration:0.9, delay:0.3, ease:[0.16,1,0.3,1] as [number,number,number,number] }}
            style={{ fontFamily:"var(--serif)", fontSize:"clamp(44px,5vw,72px)", lineHeight:1.1, letterSpacing:"-0.03em", color:"var(--text)", fontWeight:700, overflow:"visible", paddingBottom:"12px" }}>
            Sai Venkat<br/>Boyapati
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.55 }}
          style={{ fontSize:15, color:"var(--text-light)", lineHeight:1.75, maxWidth:400, marginBottom:16 }}>
          {personal.summary}
        </motion.p>

        {/* Stats */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.7 }}
          style={{ display:"flex", gap:32, marginBottom:16, flexWrap:"wrap" }}>
          {stats.map(s=>(
            <div key={s.label}>
              <div style={{ fontFamily:"var(--serif)", fontSize:36, lineHeight:1, color:"var(--text)", fontWeight:700 }}>{s.value}</div>
              <div style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Relocate */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.85 }}
          style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.08em", marginBottom:12, display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--teal)", display:"inline-block" }}/>
          Open to Remote · Hybrid · Onsite · Willing to Relocate
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }}
          style={{ display:"flex", alignItems:"center", gap:16 }}>
          <button
            onClick={()=>{ if(typeof fullpage_api!=="undefined") fullpage_api.moveTo(1,1); }}
            style={{ width:56, height:56, borderRadius:"50%", background:"var(--teal)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.3s", boxShadow:"0 8px 24px rgba(0,188,212,0.35)", flexShrink:0 }}
            onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.1)")}
            onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <span style={{ fontSize:12, fontWeight:600, color:"var(--text)", letterSpacing:"0.08em", textTransform:"uppercase" }}>My Experience</span>
        </motion.div>
      </div>

      {/* Divider with vertical text */}
      <div style={{ position:"absolute", left:"53%", top:0, bottom:0, width:1, background:"rgba(30,37,53,0.1)", zIndex:3, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ fontSize:10, color:"var(--muted)", writingMode:"vertical-rl", letterSpacing:"0.25em", textTransform:"uppercase", opacity:0.6 }}>
          I'M SENIOR SOFTWARE ENGINEER
        </div>
      </div>

      <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:1, delay:0.3 }}
        style={{ position:"relative", height:"100%", overflow:"hidden", background:"var(--bg)", display:"flex", alignItems:"center", justifyContent:"center", paddingRight:"40px" }}>

        {/* Background circles */}
        <div style={{ position:"absolute", width:400, height:400, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.15)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:300, height:300, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.1)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />

        {/* Dot grids */}
        <div style={{ position:"absolute", top:24, right:24, backgroundImage:"radial-gradient(circle, rgba(0,188,212,0.4) 1.5px, transparent 1.5px)", backgroundSize:"14px 14px", width:112, height:112, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:60, left:16, backgroundImage:"radial-gradient(circle, rgba(233,30,140,0.25) 1.5px, transparent 1.5px)", backgroundSize:"12px 12px", width:80, height:80, pointerEvents:"none" }} />

        {/* Floating plus signs */}
        <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
          style={{ position:"absolute", top:"15%", left:"8%", fontSize:22, color:"var(--teal)", opacity:0.5, pointerEvents:"none" }}>+</motion.div>
        <motion.div animate={{ y:[0,10,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:1.5 }}
          style={{ position:"absolute", bottom:"28%", right:"8%", fontSize:16, color:"var(--pink)", opacity:0.5, pointerEvents:"none" }}>+</motion.div>

        {/* Large teal circle background */}
        <div style={{ position:"absolute", top:-80, right:-80, width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,188,212,0.15) 0%, rgba(0,188,212,0.05) 50%, transparent 70%)", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"absolute", top:-40, right:-40, width:220, height:220, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.2)", pointerEvents:"none", zIndex:0 }} />

        {/* Photo frame */}
        <div style={{ position:"relative", zIndex:2, overflow:"visible" }}>

          {/* Teal offset rectangle behind photo */}
          <div style={{ position:"absolute", top:16, left:16, width:320, height:400, border:"2px solid rgba(0,188,212,0.6)", borderRadius:2, zIndex:0 }} />

          {/* Pink offset rectangle */}
          <div style={{ position:"absolute", top:-10, left:-10, width:320, height:400, border:"2px solid rgba(233,30,140,0.4)", borderRadius:2, zIndex:0 }} />

          {/* Circle behind top right */}
          <div style={{ position:"absolute", top:-30, right:-30, width:120, height:120, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.2)", zIndex:0 }} />
          <div style={{ position:"absolute", top:-15, right:-15, width:80, height:80, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.15)", zIndex:0 }} />

          {/* Pink vertical accent bar */}
          <div style={{ position:"absolute", left:-8, top:"15%", bottom:"15%", width:3, background:"linear-gradient(to bottom, transparent, var(--pink), transparent)", borderRadius:2, zIndex:3 }} />

          {/* The actual photo div stays the same */}
          <div style={{ position:"relative", width:320, height:400, zIndex:1, boxShadow:"0 24px 60px rgba(0,0,0,0.15)" }}>
          <img src="/avatar.jpg" alt="Sai Venkat Boyapati"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 15%",
              filter:"contrast(1.05) brightness(0.95)",
              clipPath:"polygon(0 4%, 4% 0, 100% 0, 100% 96%, 96% 100%, 0 100%)" }} />

          {/* Gradient bottom */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"25%", background:"linear-gradient(to top, rgba(200,234,240,0.5) 0%, transparent 100%)", pointerEvents:"none" }} />

          {/* Scan line */}
          <motion.div animate={{ top:["-5%","105%"] }} transition={{ duration:3.5, repeat:Infinity, ease:"linear", repeatDelay:2 }}
            style={{ position:"absolute", left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,rgba(0,188,212,0.7),transparent)", pointerEvents:"none", zIndex:3 }} />

          {/* Teal horizontal accent line */}
          <div style={{ position:"absolute", top:"50%", left:0, right:0, height:2, background:"linear-gradient(90deg, transparent, rgba(0,188,212,0.6), transparent)", transform:"translateY(-50%)", pointerEvents:"none", zIndex:2 }} />

          {/* Corner brackets */}
          <div style={{ position:"absolute", top:10, left:10, width:40, height:40, borderTop:"3px solid var(--teal)", borderLeft:"3px solid var(--teal)", opacity:0.8 }} />
          <div style={{ position:"absolute", top:10, right:10, width:40, height:40, borderTop:"3px solid var(--teal)", borderRight:"3px solid var(--teal)", opacity:0.8 }} />
          <div style={{ position:"absolute", bottom:10, left:10, width:40, height:40, borderBottom:"3px solid var(--pink)", borderLeft:"3px solid var(--pink)", opacity:0.8 }} />
          <div style={{ position:"absolute", bottom:10, right:10, width:40, height:40, borderBottom:"3px solid var(--pink)", borderRight:"3px solid var(--pink)", opacity:0.8 }} />

          {/* Available badge */}
          <motion.div animate={{ y:[0,-5,0] }} transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
            style={{ position:"absolute", top:-20, right:-28, background:"#fff", borderRadius:8, padding:"10px 16px", boxShadow:"0 8px 24px rgba(0,188,212,0.2)", zIndex:4 }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"var(--text)", fontWeight:600 }}>
              <motion.span animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.5, repeat:Infinity }}
                style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 6px #4ade80", display:"inline-block" }}/>
              Available for Hire
            </div>
          </motion.div>

          {/* Role badge */}
          <motion.div animate={{ y:[0,5,0] }} transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut", delay:1 }}
            style={{ position:"absolute", bottom:-20, left:-28, background:"#fff", borderRadius:8, padding:"8px 14px", boxShadow:"0 8px 24px rgba(233,30,140,0.15)", zIndex:4 }}>
            <div style={{ fontSize:9, color:"var(--muted)", marginBottom:2 }}>Current Role</div>
            <div style={{ fontSize:13, color:"var(--text)", fontWeight:700 }}>Senior Software Engineer @ PayPal</div>
          </motion.div>
          </div>
        </div>

        {/* MY PROJECTS button */}
        <div style={{ position:"absolute", bottom:0, right:0, background:"var(--pink)", padding:"16px 32px", cursor:"pointer", zIndex:4 }}
          onClick={()=>{ if(typeof fullpage_api!=="undefined") fullpage_api.moveTo(1,3); }}>
          <span style={{ fontSize:13, fontWeight:700, color:"#fff", letterSpacing:"0.15em", textTransform:"uppercase" }}>MY PROJECTS ↗</span>
        </div>
      </motion.div>
    </div>
  );
}
