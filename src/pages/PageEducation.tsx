import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "@/data/resume";

export default function PageEducation() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.2 });

  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#ede8f7", display:"grid", gridTemplateColumns:"1fr 1fr", overflow:"hidden" }}>

      {/* LEFT — dark dramatic panel */}
      <motion.div initial={{ opacity:0, x:-40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8 }}
        style={{ background:"#1e2535", display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 56px 60px 100px", position:"relative", overflow:"hidden" }}>

        {/* Giant decorative year background */}
        <div style={{ position:"absolute", bottom:-40, right:-20, fontFamily:"var(--serif)", fontSize:220, lineHeight:1, color:"rgba(255,255,255,0.04)", fontStyle:"italic", userSelect:"none", letterSpacing:"-0.05em", pointerEvents:"none" }}>25</div>

        {/* Decorative circles */}
        <div style={{ position:"absolute", top:-80, left:-80, width:300, height:300, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.15)" }} />
        <div style={{ position:"absolute", top:-40, left:-40, width:200, height:200, borderRadius:"50%", border:"1px solid rgba(0,188,212,0.1)" }} />

        <motion.div initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.8, delay:0.2 }}>
          {/* Pink accent line */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:11, fontWeight:600, color:"rgba(255,255,255,0.45)", letterSpacing:"0.18em", textTransform:"uppercase" as const }}>EDUCATION</span>
          </div>

          {/* University name large */}
          <div style={{ fontFamily:"var(--serif)", fontSize:"clamp(32px,3.5vw,48px)", color:"#fff", lineHeight:1.1, marginBottom:16, letterSpacing:"-0.02em" }}>
            Texas Tech<br/><em style={{ fontStyle:"italic", color:"var(--teal)" }}>University</em>
          </div>

          <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7, marginBottom:40 }}>
            Lubbock, Texas · May 2025
          </div>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
            {[
              { label:"Degree", value:"Master of Science" },
              { label:"Field", value:"Computer Science" },
              { label:"Duration", value:"2 Years" },
              { label:"Status", value:"Graduated ✓" },
            ].map(s=>(
              <div key={s.label}>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)", letterSpacing:"0.12em", textTransform:"uppercase" as const, marginBottom:6 }}>{s.label}</div>
                <div style={{ fontSize:15, color:"rgba(255,255,255,0.85)", fontWeight:600 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT — light panel */}
      <motion.div initial={{ opacity:0, x:40 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.15 }}
        style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 80px 60px 60px", position:"relative" }}>

        {/* Large decorative text */}
        <div style={{ position:"absolute", top:40, right:40, fontFamily:"var(--serif)", fontSize:120, lineHeight:1, color:"rgba(0,188,212,0.08)", fontStyle:"italic", userSelect:"none", letterSpacing:"-0.04em", pointerEvents:"none" }}>MS</div>

        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.8, delay:0.35 }}>
          <div style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const, marginBottom:20 }}>MASTER'S DEGREE</div>

          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(28px,3.5vw,48px)", lineHeight:1.1, letterSpacing:"-0.025em", color:"var(--text)", marginBottom:32 }}>
            Master of Science<br/>in Computer Science
          </h2>

          {/* Divider */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
            <div style={{ width:32, height:3, background:"var(--pink)", borderRadius:2 }} />
            <div style={{ height:1, flex:1, background:"rgba(0,0,0,0.08)" }} />
          </div>

          {/* Key highlights */}
          <div style={{ display:"flex", flexDirection:"column" as const, gap:16, marginBottom:40 }}>
            {[
              { icon:"🏛️", label:"Institution", value:"Texas Tech University — TTU" },
              { icon:"📍", label:"Location", value:"Lubbock, Texas, USA" },
              { icon:"🎓", label:"Graduated", value:education.graduated },
              { icon:"💻", label:"Focus Areas", value:"Software Engineering · Cloud Computing · Distributed Systems" },
            ].map(item=>(
              <div key={item.label} style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                <span style={{ fontSize:18, flexShrink:0, marginTop:1 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize:10, color:"var(--muted)", letterSpacing:"0.08em", textTransform:"uppercase" as const, marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontSize:13, color:"var(--text)", fontWeight:500, lineHeight:1.5 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,188,212,0.1)", border:"1px solid rgba(0,188,212,0.2)", borderRadius:100, padding:"8px 18px" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--teal)", display:"inline-block" }} />
            <span style={{ fontSize:12, color:"var(--teal2)", fontWeight:600 }}>GPA &amp; Academic Excellence</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
