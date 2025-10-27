import type { ReactElement } from "react";
import { useState } from "react";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import ProjectList from "../ProjectList/ProjectList";

import "./SiteGrid.css";
import Sidebar from "../Sidebar/Sidebar";
import ResumeTab from "../ResumeTab/ResumeTab";

export type CurrentContentView = "Home" | "Courses" | "Projects" | "Resume" | "Letters of Reccomendation" | "Transcript"; 

function SiteGrid() : ReactElement {
    const [currentContent, setCurrentContent] = useState<CurrentContentView>("Home"); 

    const contentElement = getCorrectContent(currentContent);

    return (
        <div className="site-grid">
            <WebsiteHeader className="site-grid-header" currentContent={currentContent} setCurrentContent={setCurrentContent}/>
            <Sidebar className="site-grid-sidebar" currentContent={currentContent} setCurrentContent={setCurrentContent}/>
            {contentElement}
        </div>
    );
}

function getCorrectContent(currentContent : CurrentContentView, contentClassName : string = "site-grid-content") : ReactElement {
    switch (currentContent) {
        case "Home":
            return <p>Home</p>;
        case "Courses":
            return <p>Courses</p>; 
        case "Projects":
            return <ProjectList className={contentClassName}/>; 
        case "Resume":
            return <ResumeTab className={contentClassName}/>
            case "Letters of Reccomendation":
                return <p>Letters of Recommendation</p>
        case "Transcript":
            return <p>Transcript</p>
    }
}

export default SiteGrid; 