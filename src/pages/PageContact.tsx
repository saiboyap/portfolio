import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PageContact() {
  const { ref, inView } = useInView({ triggerOnce:true, threshold:0.1 });
  return (
    <div ref={ref} style={{ width:"100vw", height:"100vh", background:"#e8f0fe", display:"grid", gridTemplateColumns:"55% 45%", overflow:"hidden", position:"relative" }}>

      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle at 20% 50%, rgba(0,188,212,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(233,30,140,0.05) 0%, transparent 40%)", pointerEvents:"none" }} />

      {/* LEFT — contact */}
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"60px 48px 24px 100px", position:"relative", zIndex:2 }}>
        <motion.div initial={{ opacity:0, y:30 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
            <div style={{ width:40, height:3, background:"var(--pink)", borderRadius:2 }} />
            <span style={{ fontSize:12, fontWeight:600, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase" }}>GET IN TOUCH</span>
          </div>
          <h2 style={{ fontFamily:"var(--serif)", fontSize:"clamp(40px,5vw,72px)", lineHeight:1.0, letterSpacing:"-0.025em", color:"var(--text)", marginBottom:12 }}>
            Let's build<br/>something<br/><em style={{ fontStyle:"italic", color:"var(--teal2)" }}>great.</em>
          </h2>
          <p style={{ fontSize:14, color:"var(--text-light)", lineHeight:1.75, maxWidth:380, marginBottom:20 }}>
            Open to all roles — Senior Engineer, Lead, Architect, Full Stack, Backend, or Cloud roles. Based in Texas. Open to Remote, Hybrid, Onsite, and willing to Relocate nationwide.
          </p>

          {/* CTA buttons */}
          <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:20 }}>
            <a href="mailto:venkat.saiboyap@gmail.com"
              style={{ display:"inline-flex", alignItems:"center", gap:10, background:"var(--teal)", color:"#fff", padding:"14px 28px", borderRadius:100, fontSize:13, fontWeight:600, textDecoration:"none", transition:"all 0.3s", boxShadow:"0 8px 24px rgba(0,188,212,0.3)" }}
              onMouseEnter={e=>(e.currentTarget.style.transform="translateY(-2px)")}
              onMouseLeave={e=>(e.currentTarget.style.transform="none")}>
              ✉ Send Email
            </a>
            <a href="https://www.linkedin.com/in/saiboyap/" target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:10, background:"transparent", color:"var(--text)", padding:"14px 28px", borderRadius:100, fontSize:13, textDecoration:"none", border:"2px solid var(--border)", transition:"all 0.3s" }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--teal)"; e.currentTarget.style.color="var(--teal2)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--text)"; }}>
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — contact info */}
      <motion.div initial={{ opacity:0, x:30 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.8, delay:0.2 }}
        style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 80px 40px 40px", position:"relative", zIndex:2 }}>
        <div style={{ fontSize:11, color:"var(--muted)", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:16 }}>YOU KNOW HOW TO FIND ME</div>
        <h3 style={{ fontFamily:"var(--serif)", fontSize:"clamp(36px,4vw,56px)", color:"var(--text)", marginBottom:32 }}>Contact.</h3>

        {[
          { label:"Get in touch", value:"venkat.saiboyap@gmail.com", href:"mailto:venkat.saiboyap@gmail.com",
            svg:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg> },
          { label:"Call me", value:"(617) 203-2032", href:"tel:6172032032",
            svg:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42A2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.4a16 16 0 006 6l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
          { label:"LinkedIn", value:"linkedin.com/in/saiboyap", href:"https://www.linkedin.com/in/saiboyap/",
            svg:<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
          { label:"GitHub", value:"github.com/saiboyap", href:"https://github.com/saiboyap",
            svg:<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
        ].map(c=>(
          <motion.a key={c.label} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel={c.href.startsWith("http")?"noopener noreferrer":undefined}
            whileHover={{ x:6 }}
            style={{ display:"flex", alignItems:"center", gap:16, marginBottom:18, textDecoration:"none" }}>
            <div style={{ width:48, height:48, borderRadius:"50%", background:"var(--teal)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 6px 16px rgba(0,188,212,0.25)" }}>
              {c.svg}
            </div>
            <div style={{ minWidth:0 }}>
              <div style={{ fontSize:11, color:"var(--muted)", marginBottom:2, letterSpacing:"0.05em" }}>{c.label}</div>
              <div style={{ fontSize:13, color:"var(--text)", fontWeight:600 }}>{c.value}</div>
            </div>
          </motion.a>
        ))}

        <div style={{ marginTop:8, paddingTop:20, borderTop:"1px solid var(--border)", fontSize:12, color:"var(--muted)" }}>
          © Sai Venkat Boyapati. 2025. All Rights Reserved.
        </div>
      </motion.div>
    </div>
  );
}
