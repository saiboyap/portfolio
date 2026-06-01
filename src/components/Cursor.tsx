import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mx = -200, my = -200, rx = -200, ry = -200, raf = 0;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const over  = (e: MouseEvent) => { if ((e.target as HTMLElement).closest("a,button") && ring.current) { ring.current.style.width="50px"; ring.current.style.height="50px"; ring.current.style.borderColor="var(--accent2)"; } };
    const out   = () => { if (ring.current) { ring.current.style.width="28px"; ring.current.style.height="28px"; ring.current.style.borderColor="var(--accent)"; } };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout",  out);
    const tick = () => {
      rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
      if (dot.current)  dot.current.style.transform  = `translate(${mx-3}px,${my-3}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx-14}px,${ry-14}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove",move); window.removeEventListener("mouseover",over); window.removeEventListener("mouseout",out); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div ref={dot}  style={{ position:"fixed",top:0,left:0,width:6,height:6,borderRadius:"50%",background:"var(--accent)",zIndex:9999,pointerEvents:"none" }} />
      <div ref={ring} style={{ position:"fixed",top:0,left:0,width:28,height:28,borderRadius:"50%",border:"1px solid var(--accent)",zIndex:9998,pointerEvents:"none",transition:"width 0.2s,height 0.2s,border-color 0.2s" }} />
    </>
  );
}
