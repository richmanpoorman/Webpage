import type { ReactElement } from "react";
import "./PDFViewer.css"

type PDFViewerProp = {
    className? : string,
    filePath   : string, 
    altText?   : string
};

function PDFViewer({className = "", filePath, altText = ""} : PDFViewerProp) : ReactElement {
    return (
        <div className={"pdf-wrapper " + className}>
            <object className="pdf" data={filePath} type="application/pdf" aria-label={altText}/>
        </div>
    );
}

export default PDFViewer