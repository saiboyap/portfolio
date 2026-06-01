import { motion } from "framer-motion";
import { personal } from "@/data/resume";

export default function LeftSidebar() {
  const goToContact = () => {
    if (typeof fullpage_api !== "undefined") fullpage_api.moveTo(1, 5);
  };

  const links = [
    { label:"LinkedIn", href:personal.linkedin, external:true, onClick:undefined as undefined | (()=>void) },
    { label:"GitHub",   href:"https://github.com/saiboyap", external:true, onClick:undefined as undefined | (()=>void) },
    { label:"Email",    href:"#contact", external:false, onClick:goToContact },
    { label:"Phone",    href:"#contact", external:false, onClick:goToContact },
  ];

  return (
    <div style={{ position:"fixed", left:0, top:0, bottom:0, width:80, zIndex:200, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", padding:"80px 0 40px" }}>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
        {links.map((s,i)=>(
          <motion.a key={s.label}
            href={s.external ? s.href : "#"}
            target={s.external ? "_blank" : undefined}
            rel={s.external ? "noopener noreferrer" : undefined}
            onClick={!s.external ? (e) => { e.preventDefault(); s.onClick?.(); } : undefined}
            initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.3+i*0.08 }}
            style={{ fontSize:11, color:"var(--text-light)", textDecoration:"none", writingMode:"vertical-rl", letterSpacing:"0.05em", padding:"8px 4px", transition:"color 0.2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="var(--pink)")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--text-light)")}>
            {s.label}
          </motion.a>
        ))}
        <div style={{ width:1, height:48, background:"var(--text)", marginTop:8, opacity:0.3 }} />
      </div>
    </div>
  );
}
