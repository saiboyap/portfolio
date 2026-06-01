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
    <div style={{ width:"100vw", height:"100vh", display:"grid", gridTemplateColumns:"52% 48%", background:"var(--bg)", position:"relative", overflow:"hidden" }}>

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

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.2, delay:0.3 }}
        style={{ position:"relative", height:"100vh", overflow:"hidden", marginTop:0 }}>

        {/* Full bleed photo */}
        <img src="/avatar.jpg" alt="Sai Venkat Boyapati"
          style={{ width:"100%", height:"100vh", objectFit:"cover", objectPosition:"top center",
            filter:"contrast(1.1) brightness(0.88) saturate(0.85)" }} />

        {/* Teal color wash overlay — top portion */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg, rgba(0,188,212,0.35) 0%, transparent 50%)", pointerEvents:"none" }} />

        {/* Pink gradient bottom */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"40%", background:"linear-gradient(to top, rgba(233,30,140,0.15) 0%, transparent 100%)", pointerEvents:"none" }} />

        {/* Dark vignette sides */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(200,234,240,0.5) 0%, transparent 15%, transparent 75%, rgba(30,37,53,0.2) 100%)", pointerEvents:"none" }} />

        {/* Large watermark name behind */}
        <div style={{ position:"absolute", bottom:80, left:-10, right:0, fontFamily:"var(--serif)", fontSize:"clamp(60px,8vw,100px)", fontWeight:700, color:"rgba(255,255,255,0.07)", letterSpacing:"-0.03em", lineHeight:1, pointerEvents:"none", userSelect:"none", whiteSpace:"nowrap" }}>
          Boyapati
        </div>

        {/* Scan line */}
        <motion.div animate={{ top:["-5%","105%"] }} transition={{ duration:4, repeat:Infinity, ease:"linear", repeatDelay:3 }}
          style={{ position:"absolute", left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,rgba(0,188,212,0.8),transparent)", pointerEvents:"none", zIndex:4 }} />

        {/* Top left — dot grid */}
        <div style={{ position:"absolute", top:20, left:20, backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)", backgroundSize:"14px 14px", width:84, height:84, pointerEvents:"none" }} />

        {/* Bottom right dot grid */}
        <div style={{ position:"absolute", bottom:80, right:20, backgroundImage:"radial-gradient(circle, rgba(233,30,140,0.35) 1.5px, transparent 1.5px)", backgroundSize:"12px 12px", width:70, height:70, pointerEvents:"none" }} />

        {/* Available badge — top right */}
        <motion.div animate={{ y:[0,-6,0] }} transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
          style={{ position:"absolute", top:32, right:24, background:"rgba(255,255,255,0.95)", borderRadius:100, padding:"8px 16px", boxShadow:"0 8px 32px rgba(0,0,0,0.12)", zIndex:5, backdropFilter:"blur(8px)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, fontSize:12, color:"var(--text)", fontWeight:700 }}>
            <motion.span animate={{ opacity:[1,0.2,1] }} transition={{ duration:1.5, repeat:Infinity }}
              style={{ width:8, height:8, borderRadius:"50%", background:"#4ade80", boxShadow:"0 0 8px #4ade80", display:"inline-block" }}/>
            Available for Hire
          </div>
        </motion.div>

        {/* Experience badge — left side floating */}
        <motion.div animate={{ x:[0,4,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
          style={{ position:"absolute", top:"40%", left:20, background:"rgba(255,255,255,0.92)", borderRadius:10, padding:"12px 16px", boxShadow:"0 8px 32px rgba(0,0,0,0.1)", zIndex:5, backdropFilter:"blur(8px)" }}>
          <div style={{ fontSize:22, fontWeight:800, color:"var(--teal2)", lineHeight:1, fontFamily:"var(--serif)" }}>8+</div>
          <div style={{ fontSize:9, color:"var(--muted)", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:2 }}>Years Exp.</div>
        </motion.div>

        {/* Role badge — bottom left */}
        <motion.div animate={{ y:[0,6,0] }} transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut", delay:1 }}
          style={{ position:"absolute", bottom:100, left:24, background:"rgba(255,255,255,0.92)", borderRadius:10, padding:"10px 14px", boxShadow:"0 8px 32px rgba(0,0,0,0.1)", zIndex:5, backdropFilter:"blur(8px)" }}>
          <div style={{ fontSize:9, color:"var(--muted)", marginBottom:3, letterSpacing:"0.06em" }}>Current Role</div>
          <div style={{ fontSize:12, color:"var(--text)", fontWeight:700 }}>Sr. Software Engineer</div>
          <div style={{ fontSize:10, color:"var(--teal2)", fontWeight:600 }}>@ PayPal · Austin, TX</div>
        </motion.div>

        {/* Pink corner accent top left */}
        <div style={{ position:"absolute", top:0, left:0, width:0, height:0, borderStyle:"solid", borderWidth:"60px 60px 0 0", borderColor:"rgba(233,30,140,0.2) transparent transparent transparent", pointerEvents:"none" }} />

        {/* MY PROJECTS button */}
        <div style={{ position:"absolute", bottom:0, right:0, background:"var(--pink)", padding:"18px 32px", cursor:"pointer", zIndex:6 }}
          onClick={()=>{ if(typeof fullpage_api!=="undefined") fullpage_api.moveTo(1,3); }}>
          <span style={{ fontSize:13, fontWeight:700, color:"#fff", letterSpacing:"0.15em", textTransform:"uppercase" }}>MY PROJECTS ↗</span>
        </div>

      </motion.div>
    </div>
  );
}
