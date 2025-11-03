import { type ReactElement } from "react";
import { letters } from "../../assets/data.json";
import PDFViewer from "../PDFViewer/PDFViewer";
import "./LetterTab.css";
import Tab from "../Tabs/Tab";
import TabsList from "../Tabs/TabsList";

type LettersTabProps = {
    className? : string
}

type LetterData = {
    title     : string, 
    file      : string, 
    linkedin? : string
}

const letterList : LetterData[] = letters;

function LetterTab({className = ""} : LettersTabProps) : ReactElement {
    

    const letterTabs : ReactElement[] = letterList.map(({title = "", file, linkedin} : LetterData) => {
        const linkedinElement : ReactElement = linkedin ? <a href={linkedin}>LinkedIn Account</a> 
                                                        : <></>;                            
        return (
            <Tab tabName={title} className="letter-tab">
                <div className="letter">
                    <h2 className="letter-title">{title}</h2>
                    {linkedinElement}
                    <PDFViewer className="letter-data" filePath={file} altText={title}/>
                </div>
            </Tab>
        );
    });

    return (
        <TabsList className={"letters-list " + className}>
            {letterTabs}
        </TabsList>
    );
}

export default LetterTab;