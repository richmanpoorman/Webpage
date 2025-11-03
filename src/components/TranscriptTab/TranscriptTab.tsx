import { type ReactElement } from "react";
import { transcripts } from "../../assets/data.json";
import PDFViewer from "../PDFViewer/PDFViewer";
import "./TranscriptTab.css";
import Tab from "../Tabs/Tab";
import TabsList from "../Tabs/TabsList";

type TranscriptsTabProps = {
    className? : string
}

type TranscriptData = {
    title     : string, 
    file      : string
}

const transcriptsData : TranscriptData[] = transcripts;

function TranscriptTab({className = ""} : TranscriptsTabProps) : ReactElement {
    

    const transcriptTabs : ReactElement[] = transcriptsData.map(({title = "", file} : TranscriptData) => {                     
        return (
            <Tab tabName={title} className="transcript-tab">
                <div className="transcript">
                    <h2 className="transcript-title">{title}</h2>
                    <PDFViewer className="transcript-data" filePath={file} altText={title}/>
                </div>
            </Tab>
        );
    });

    return (
        <TabsList className={"transcripts-list " + className}>
            {transcriptTabs}
        </TabsList>
    );
}

export default TranscriptTab;