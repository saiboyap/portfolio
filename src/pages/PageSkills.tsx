import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/data/resume";

export default function PageSkills() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  const col: Record<string,string> = { Expert:"var(--teal2)", Advanced:"var(--pink)", Proficient:"var(--muted)" };

  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#f0f7e6", display:"flex", overflow:"hidden" }}>

      {/* LEFT */}
      <div style={{ width:300, flexShrink:0, display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 32px 40px 100px", borderRight:"1px solid rgba(0,0,0,0.06)" }}>
        <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:12, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const }}>SKILLS</span>
          </div>
          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(36px,4vw,56px)", lineHeight:1.0, letterSpacing:"-0.02em", color:"var(--text)", marginBottom:16 }}>
            What<br/>I<br/>Know
          </h2>
          <p style={{ fontSize:12, color:"var(--text-light)", lineHeight:1.75, marginBottom:16 }}>8 core domains · 70+ skills across languages, backend, frontend, cloud, data, security, architecture, and tools.</p>
          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:6 }}>
            {["Expert","Advanced","Proficient"].map(tag=>(
              <div key={tag} style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"var(--muted)" }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:col[tag], display:"inline-block" }}/>
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — 4x2 grid scrollable */}
      <div style={{ flex:1, height:"100vh", overflowY:"auto", padding:"72px 40px 40px 0" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"rgba(0,0,0,0.06)", marginLeft:1 }}>
          {skillCategories.map((cat,i)=>(
            <motion.div key={cat.id}
              initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.07 }}
              style={{ padding:"24px 22px", background:"#f0f7e6", transition:"background 0.25s" }}
              onMouseEnter={e=>(e.currentTarget.style.background="#e4f0d8")}
              onMouseLeave={e=>(e.currentTarget.style.background="#f0f7e6")}>
              {/* Icon circle */}
              <div style={{ width:44, height:44, borderRadius:"50%", background:"var(--teal)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>
                <span style={{ fontSize:12, fontWeight:700, color:"#fff", letterSpacing:"0.04em" }}>
                  {["PL","BE","FE","CL","DB","SE","AR","TL"][i]||"SK"}
                </span>
              </div>
              <div style={{ fontSize:14, fontWeight:700, color:"var(--text)", marginBottom:14, fontFamily:"var(--sans)" }}>{cat.label}</div>
              <div style={{ display:"flex", flexDirection:"column" as const, gap:5 }}>
                {cat.skills.slice(0,6).map(s=>(
                  <div key={s.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:11, gap:8 }}>
                    <span style={{ color:"var(--text-light)", flex:1, lineHeight:1.3 }}>{s.name}</span>
                    <span style={{ fontSize:9, color:col[s.tag]||"var(--muted)", fontWeight:700, letterSpacing:"0.06em", flexShrink:0 }}>{s.tag.slice(0,3).toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ height:20 }}/>
      </div>
    </div>
  );
}
