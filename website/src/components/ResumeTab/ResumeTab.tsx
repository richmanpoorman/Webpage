import type { ReactElement } from "react";
import { resumes } from "../../assets/data.json";
import PDFViewer from "../PDFViewer/PDFViewer";
import "./ResumeTab.css";

type ResumeTabProps = {
    className? : string
}

type ResumeData = {
    title? : string, 
    file   : string 
}

function ResumeTab({className = ""} : ResumeTabProps) : ReactElement {
    const resumeList : ResumeData[] = resumes;
    const resumeElements : ReactElement[] = resumeList.map(({title = "", file} : ResumeData) => (
        <div className="resume">
            <h2 className="resume-title">{title}</h2>
            <PDFViewer className="resume-data" filePath={file} altText={title}/>
        </div>
    ));
    return (
        <div className={"resume-list " + className}>
            {resumeElements}
        </div>
    );
}

export default ResumeTab;