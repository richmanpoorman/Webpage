import type { ReactElement, CSSProperties } from "react";
import type { CurrentContentView } from "../SiteGrid/SiteGrid";

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
    const githubLink    : ReactElement  = <a className="header-github-link" href="https://github.com/richmanpoorman">GitHub</a>          // TODO : Replace with icons
    const linkedinLink  : ReactElement  = <a className="header-linkedin-link" href="https://www.linkedin.com/in/matthewkw/">LinkedIn</a> // TODO : Replace with icons
    // const homeTab       : ReactElement  = <button className="header-home-button"       onClick={setViewFunction("Home")}                      style={selected}>About</button>
    const coursesTab    : ReactElement  = <button className="header-courses-button"    onClick={setViewFunction("Courses")}                   style={selected}>Courses</button>
    const projectsTab   : ReactElement  = <button className="header-projects-button"   onClick={setViewFunction("Projects")}                  style={selected}>Projects</button>
    const resumeTab     : ReactElement  = <button className="header-resume-button"     onClick={setViewFunction("Resume")}                    style={selected}>Resume</button>
    const letttersTab   : ReactElement  = <button className="header-letters-button"    onClick={setViewFunction("Letters of Reccomendation")} style={selected}>Letters of Recommendation</button>
    const transcriptTab : ReactElement  = <button className="header-transcript-button" onClick={setViewFunction("Transcript")}                style={selected}>Transcript</button>
    return (
        <div className={"website-header " + className}>
            {/* <div>{homeTab}</div> */}
            <div>{coursesTab}</div>
            <div>{projectsTab}</div>
            <div>{resumeTab}</div>
            <div>{letttersTab}</div>
            <div>{transcriptTab}</div>
            <div>
                {githubLink}
                {linkedinLink}
            </div>
            
        </div>
    );
}

export default Sidebar; 