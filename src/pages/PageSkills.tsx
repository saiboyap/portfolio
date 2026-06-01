import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/data/resume";

export default function PageSkills() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  const col: Record<string,string> = { Expert:"var(--teal2)", Advanced:"var(--pink)", Proficient:"var(--muted)" };

  const certifications = [
    {
      name: "AWS Certified Developer",
      level: "Associate",
      issuer: "Amazon Web Services",
      color: "#FF9900",
      bg: "rgba(255,153,0,0.08)",
      border: "rgba(255,153,0,0.25)",
      icon: "☁️",
      year: "2024",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      level: "Foundational",
      issuer: "Amazon Web Services",
      color: "#FF9900",
      bg: "rgba(255,153,0,0.08)",
      border: "rgba(255,153,0,0.25)",
      icon: "☁️",
      year: "2024",
    },
    {
      name: "AWS Certified Solutions Architect",
      level: "Associate",
      issuer: "Amazon Web Services",
      color: "#FF9900",
      bg: "rgba(255,153,0,0.08)",
      border: "rgba(255,153,0,0.25)",
      icon: "🏗️",
      year: "2024",
    },
    {
      name: "Google Cloud Developer",
      level: "Professional",
      issuer: "Google Cloud",
      color: "#4285F4",
      bg: "rgba(66,133,244,0.08)",
      border: "rgba(66,133,244,0.25)",
      icon: "🌐",
      year: "2024",
    },
    {
      name: "GitHub Copilot",
      level: "Certified",
      issuer: "GitHub / Microsoft",
      color: "#6e40c9",
      bg: "rgba(110,64,201,0.08)",
      border: "rgba(110,64,201,0.25)",
      icon: "🤖",
      year: "2024",
    },
    {
      name: "AI Fundamentals",
      level: "Certified",
      issuer: "Microsoft Azure",
      color: "#00a4ef",
      bg: "rgba(0,164,239,0.08)",
      border: "rgba(0,164,239,0.25)",
      icon: "🧠",
      year: "2024",
    },
  ];

  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#f0f7e6", display:"flex", overflow:"hidden" }}>

      {/* LEFT */}
      <div style={{ width:300, flexShrink:0, display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 32px 40px 100px", borderRight:"1px solid rgba(0,0,0,0.06)" }}>
        <motion.div initial={{ opacity:0, x:-30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:12, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const }}>SKILLS</span>
          </div>
          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(32px,3.5vw,48px)", lineHeight:1.0, letterSpacing:"-0.02em", color:"var(--text)", marginBottom:16 }}>
            What<br/>I<br/>Know
          </h2>
          <p style={{ fontSize:12, color:"var(--text-light)", lineHeight:1.75, marginBottom:20 }}>8 core domains · 70+ skills across languages, backend, frontend, cloud, data, security, architecture, and tools.</p>
          <div style={{ display:"flex", flexDirection:"column" as const, gap:6 }}>
            {["Expert","Advanced","Proficient"].map(tag=>(
              <div key={tag} style={{ display:"flex", alignItems:"center", gap:6, fontSize:11, color:"var(--muted)" }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:col[tag], display:"inline-block" }}/>
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — certifications + skills grid */}
      <div style={{ flex:1, height:"100vh", overflowY:"auto", padding:"56px 32px 24px 0" }}>

        {/* Certifications section */}
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10, paddingLeft:1 }}>
            <div style={{ width:28, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:11, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const }}>Certifications</span>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap" as const, gap:7, marginBottom:16 }}>
            {certifications.map((cert,i)=>(
              <motion.div key={cert.name}
                initial={{ opacity:0, scale:0.9 }} animate={inView?{opacity:1,scale:1}:{}} transition={{ duration:0.4, delay:i*0.06 }}
                style={{ display:"flex", alignItems:"center", gap:10, padding:"7px 12px", background:cert.bg, border:`1px solid ${cert.border}`, borderRadius:100, transition:"all 0.25s", cursor:"default" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=`0 6px 16px ${cert.border}`; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
                <span style={{ fontSize:13 }}>{cert.icon}</span>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:"var(--text)", lineHeight:1.2 }}>{cert.name}</div>
                  <div style={{ fontSize:9, color:cert.color, letterSpacing:"0.05em" }}>{cert.issuer} · {cert.level}</div>
                </div>
                <span style={{ fontSize:9, color:cert.color, fontWeight:700, background:cert.bg, padding:"2px 6px", borderRadius:100, border:`1px solid ${cert.border}`, marginLeft:4, whiteSpace:"nowrap" as const }}>{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills divider */}
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10, paddingLeft:1 }}>
          <div style={{ width:28, height:3, background:"var(--teal)", borderRadius:2 }} />
          <span style={{ fontSize:11, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" as const }}>Technical Skills</span>
        </div>

        {/* Skills grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:"rgba(0,0,0,0.06)", marginLeft:1 }}>
          {skillCategories.map((cat,i)=>(
            <motion.div key={cat.id}
              initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.06 }}
              style={{ padding:"14px 14px", background:"#f0f7e6", transition:"background 0.25s" }}
              onMouseEnter={e=>(e.currentTarget.style.background="#e4f0d8")}
              onMouseLeave={e=>(e.currentTarget.style.background="#f0f7e6")}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"var(--teal)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:6 }}>
                <span style={{ fontSize:10, fontWeight:700, color:"#fff", letterSpacing:"0.04em" }}>
                  {["PL","BE","FE","CL","DB","SE","AR","TL"][i]||"SK"}
                </span>
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:"var(--text)", marginBottom:8, fontFamily:"var(--sans)" }}>{cat.label}</div>
              <div style={{ display:"flex", flexDirection:"column" as const, gap:3 }}>
                {cat.skills.slice(0,4).map(s=>(
                  <div key={s.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:9, gap:6 }}>
                    <span style={{ color:"var(--text-light)", flex:1, lineHeight:1.3 }}>{s.name}</span>
                    <span style={{ fontSize:8, color:col[s.tag]||"var(--muted)", fontWeight:700, letterSpacing:"0.06em", flexShrink:0 }}>{s.tag.slice(0,3).toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
