import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function ScrollProgress({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const fn = () => setPct((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, [containerRef]);
  return (
    <div style={{ position:"fixed", top:48, left:64, right:64, height:1, zIndex:200, pointerEvents:"none", background:"var(--border)" }}>
      <div style={{ height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,var(--accent),var(--accent3))", boxShadow:"0 0 6px var(--accent2)", transition:"width 0.1s linear" }} />
    </div>
  );
}
