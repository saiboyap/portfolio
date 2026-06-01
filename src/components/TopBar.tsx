import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label:"Home",       page:1 },
    { label:"Experience", page:2 },
    { label:"Skills",     page:3 },
    { label:"Projects",   page:4 },
    { label:"Education",  page:5 },
    { label:"Contact",    page:6 },
  ];

  const goTo = (page: number) => {
    if (typeof fullpage_api !== "undefined") fullpage_api.moveTo(1, page - 1);
    setMenuOpen(false);
  };

  return (
    <>
      <div style={{ position:"fixed", top:0, left:0, right:0, height:64, zIndex:300, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 24px 0 20px" }}>
        <a href="#" style={{ fontFamily:"var(--serif)", fontSize:24, fontWeight:700, color:"var(--text)", textDecoration:"none", letterSpacing:"-0.02em" }}>SVB.</a>
        <button onClick={()=>setMenuOpen(!menuOpen)}
          style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", padding:4 }}>
          {menuOpen ? <X size={24} color="var(--text)" /> : <Menu size={24} color="var(--text)" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, x:40, scale:0.95 }}
            animate={{ opacity:1, x:0, scale:1 }}
            exit={{ opacity:0, x:40, scale:0.95 }}
            transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}
            style={{
              position:"fixed",
              top:56,
              right:16,
              width:300,
              background:"#1e2535",
              borderRadius:16,
              zIndex:400,
              padding:"32px 32px 28px",
              boxShadow:"0 24px 64px rgba(0,0,0,0.35)",
              display:"flex",
              flexDirection:"column",
            }}>
            {/* Social icons row */}
            <div style={{ display:"flex", gap:16, marginBottom:32, alignItems:"center" }}>
              {[
                { href:"https://github.com/saiboyap", svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                { href:"https://www.linkedin.com/in/saiboyap/", svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href:"mailto:venkat.saiboyap@gmail.com", svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg> },
                { href:"tel:6172032032", svg:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.63 3.42A2 2 0 013.6 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 8.4a16 16 0 006 6l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
              ].map((s,i)=>(
                <a key={i} href={s.href} target={s.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                  style={{ color:"rgba(255,255,255,0.45)", textDecoration:"none", transition:"color 0.2s", display:"flex" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="var(--teal)")}
                  onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.45)")}>
                  {s.svg}
                </a>
              ))}
            </div>

            {/* Nav links */}
            {navLinks.map((l,i)=>(
              <motion.button key={l.label} onClick={()=>goTo(l.page)}
                initial={{ opacity:0, x:16 }} animate={{ opacity:1, x:0 }} transition={{ delay:i*0.05 }}
                style={{ background:"none", border:"none", textAlign:"left", fontSize:20, fontWeight:600, color:"#fff", padding:"12px 0", cursor:"pointer", borderBottom:"1px solid rgba(255,255,255,0.07)", transition:"color 0.2s", fontFamily:"var(--sans)", width:"100%" }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--teal)")}
                onMouseLeave={e=>(e.currentTarget.style.color="#fff")}>
                {l.label}
              </motion.button>
            ))}

            <div style={{ marginTop:24, fontSize:11, color:"rgba(255,255,255,0.3)", lineHeight:1.5 }}>
              © Sai Venkat Boyapati. 2025.<br/>All Rights Reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
