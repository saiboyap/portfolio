import { useEffect, useState } from "react";
import "./index.css";
import fullpage from "fullpage.js";
import LeftSidebar    from "@/components/LeftSidebar";
import RightSidebar   from "@/components/RightSidebar";
import TopBar         from "@/components/TopBar";
import PageHome       from "@/pages/PageHome";
import PageExperience from "@/pages/PageExperience";
import PageSkills     from "@/pages/PageSkills";
import PageProjects   from "@/pages/PageProjects";
import PageEducation  from "@/pages/PageEducation";
import PageContact    from "@/pages/PageContact";

export default function App() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    new fullpage("#fp-main", {
      licenseKey: "gplv3-license",
      autoScrolling: false,
      scrollHorizontally: true,
      scrollHorizontallyKey: "gplv3-license",
      slidesNavigation: false,
      controlArrows: false,
      scrollingSpeed: 700,
      easingcss3: "cubic-bezier(0.77, 0, 0.175, 1)",
      loopHorizontal: false,
      keyboardScrolling: true,
      touchSensitivity: 8,
      normalScrollElements: ".scrollable-content",
      onSlideLeave: (_section: any, _origin: any, destination: any) => {
        setActivePage(destination.index);
      },
    });
    return () => {
      if (typeof fullpage_api !== "undefined" && (fullpage_api as any).destroy) {
        (fullpage_api as any).destroy("all");
      }
    };
  }, []);

  useEffect(() => {
    let isAnimating = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isAnimating) return;
      isAnimating = true;

      if (e.deltaY > 0 || e.deltaX > 0) {
        if (typeof fullpage_api !== "undefined") fullpage_api.moveSlideRight();
      } else {
        if (typeof fullpage_api !== "undefined") fullpage_api.moveSlideLeft();
      }

      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <TopBar />
      <LeftSidebar />
      <RightSidebar activePage={activePage} />
      <div id="fp-main">
        <div className="section">
          <div className="slide"><PageHome /></div>
          <div className="slide"><PageExperience /></div>
          <div className="slide"><PageSkills /></div>
          <div className="slide"><PageProjects /></div>
          <div className="slide"><PageEducation /></div>
          <div className="slide"><PageContact /></div>
        </div>
      </div>
    </>
  );
}
