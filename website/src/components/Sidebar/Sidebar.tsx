import type { ReactElement, CSSProperties } from "react";
import type { CurrentContentView } from "../SiteGrid/SiteGrid";
import "./Sidebar.css";

type SidebarProps = {
    className?        : string,
    currentContent    : CurrentContentView,
    setCurrentContent : (val : CurrentContentView) => void
};

function Sidebar({className = "", currentContent, setCurrentContent} : SidebarProps) : ReactElement {
    
    function setViewFunction(toContent : CurrentContentView) : () => void {
        return () => setCurrentContent(toContent); 
    }

    const selected      : CSSProperties = { "--selected" : currentContent } as CSSProperties;
    // const homeTab       : ReactElement  = <button className="sidebar-home-button"       onClick={setViewFunction("Home")}                      style={selected}>About</button>
    const coursesTab    : ReactElement  = <button className="sidebar-courses-button sidebar-button"    onClick={setViewFunction("Courses")}                   style={selected}>Courses</button>
    const projectsTab   : ReactElement  = <button className="sidebar-projects-button sidebar-button"   onClick={setViewFunction("Projects")}                  style={selected}>Projects</button>
    const resumeTab     : ReactElement  = <button className="sidebar-resume-button sidebar-button"     onClick={setViewFunction("Resume")}                    style={selected}>Resume</button>
    // const letttersTab   : ReactElement  = <button className="sidebar-letters-button sidebar-button"    onClick={setViewFunction("Letters of Reccomendation")} style={selected}>Letters of Recommendation</button>
    // const transcriptTab : ReactElement  = <button className="sidebar-transcript-button sidebar-button" onClick={setViewFunction("Transcript")}                style={selected}>Transcript</button>
    return (
        <div className={"website-sidebar " + className}>
            {/* <div>{homeTab}</div> */}
            {projectsTab}
            {resumeTab}
            {coursesTab}
            {/* <div>{letttersTab}</div> */}
            {/* <div>{transcriptTab}</div> */}
        </div>
    );
}

export default Sidebar; 