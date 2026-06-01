import { motion } from "framer-motion";

const pages = ["Home","Experience","Skills","Projects","Education","Contact"];

interface Props { activePage: number; }

export default function RightSidebar({ activePage }: Props) {
  const goTo = (idx: number) => {
    if (typeof fullpage_api !== "undefined") fullpage_api.moveTo(1, idx);
  };

  return (
    <div style={{ position:"fixed", right:24, top:"50%", transform:"translateY(-50%)", zIndex:200, display:"flex", flexDirection:"column", gap:10 }}>
      {pages.map((label,i)=>(
        <motion.button key={label} onClick={()=>goTo(i)} title={label}
          initial={{ opacity:0, x:10 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.4+i*0.07 }}
          style={{ width:activePage===i?12:8, height:activePage===i?12:8, borderRadius:"50%", border:"none", padding:0, cursor:"pointer", background:activePage===i?"var(--navy)":"var(--teal)", transition:"all 0.3s" }} />
      ))}
    </div>
  );
}
