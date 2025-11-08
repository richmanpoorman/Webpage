import type { ReactElement } from "react";
import { useState } from "react";
import WebsiteHeader from "../WebsiteHeader/WebsiteHeader";
import ProjectList from "../ProjectList/ProjectList";

import "./SiteGrid.css";
import Sidebar from "../Sidebar/Sidebar";
import ResumeTab from "../ResumeTab/ResumeTab";
import LetterTab from "../LetterTab/LetterTab";
import TranscriptTab from "../TranscriptTab/TranscriptTab";
import CoursesTab from "../CoursesTab/CoursesTab";
import HomeTab from "../HomeTab/HomeTab";
import Footer from "../Footer/Footer";

export type CurrentContentView = "Home" | "Courses" | "Projects" | "Resume" | "Letters of Reccomendation" | "Transcript"; 

function SiteGrid() : ReactElement {
    const [currentContent, setCurrentContent] = useState<CurrentContentView>("Home"); 

    const contentElement = getCorrectContent(currentContent);

    return (
        <div className="site-grid">
            <WebsiteHeader className="site-grid-header" currentContent={currentContent} setCurrentContent={setCurrentContent}/>
            <Sidebar className="site-grid-sidebar" currentContent={currentContent} setCurrentContent={setCurrentContent}/>
            <Footer className="site-grid-footer"/>
            <div className="site-grid-content">{contentElement}</div>
        </div>
    );
}

function getCorrectContent(currentContent : CurrentContentView, contentClassName : string = "site-grid-content") : ReactElement {
    switch (currentContent) {
        case "Home":
            return <HomeTab className={contentClassName}/>;
        case "Courses":
            return <CoursesTab className={contentClassName}/>; 
        case "Projects":
            return <ProjectList className={contentClassName}/>; 
        case "Resume":
            return <ResumeTab className={contentClassName}/>; 
        case "Letters of Reccomendation":
            return <LetterTab className={contentClassName}/>; 
        case "Transcript":
            return <TranscriptTab className={contentClassName}/>
    }
}

export default SiteGrid; 