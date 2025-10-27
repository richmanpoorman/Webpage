import type { ReactElement } from "react";
import { useState } from "react";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import ProjectList from "../ProjectList/ProjectList";

import "./SiteGrid.css";
import Sidebar from "../Sidebar/Sidebar";

export type CurrentContentView = "Home" | "Courses" | "Projects" | "Resume"; 

function SiteGrid() : ReactElement {
    const [currentContent, setCurrentContent] = useState<CurrentContentView>("Home"); 

    const contentElement = getCorrectContent(currentContent);

    return (
        <div className="site-grid">
            <WebsiteHeader className="site-grid-header"/>
            <Sidebar className="site-grid-sidebar" currentContent={currentContent} setCurrentContent={setCurrentContent}/>
            {contentElement}
        </div>
    );
}

function getCorrectContent(currentContent : CurrentContentView, contentClassName : string = "site-grid-content") : ReactElement {
    switch (currentContent) {
        case "Home":
            return <>Home</>;
        case "Courses":
            return <>Courses</>; 
        case "Projects":
            return <ProjectList className={contentClassName}/>; 
        case "Resume":
            return <>Resume</>;
    }
}

export default SiteGrid; 