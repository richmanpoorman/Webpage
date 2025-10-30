import type { ReactElement } from "react";
import { resumes } from "../../assets/data.json";
import PDFViewer from "../PDFViewer/PDFViewer";
import "./ResumeTab.css";
import Tab from "../Tabs/Tab";
import TabsList from "../Tabs/TabsList";

type ResumeTabProps = {
    className? : string
}

type ResumeData = {
    title? : string, 
    file   : string 
}

const resumeList : ResumeData[] = resumes;

function ResumeTab({className = ""} : ResumeTabProps) : ReactElement {
    const resumeElements : ReactElement[] = resumeList.map(({title = "", file} : ResumeData) => (
        <Tab tabName={title}>
            <div className="resume">
                <h2 className="resume-title">{title}</h2>
                <PDFViewer className="resume-data" filePath={file} altText={title}/>
            </div>
        </Tab>
    ));
    return (
        <TabsList className={"resume-list " + className}>
            {resumeElements}
        </TabsList>
    );
}

export default ResumeTab;