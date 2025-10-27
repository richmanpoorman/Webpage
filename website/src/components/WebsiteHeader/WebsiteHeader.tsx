import type { ReactElement, CSSProperties } from "react";
import type { CurrentContentView } from "../SiteGrid/SiteGrid";

type WebsiteHeaderProps = {
    className?        : string,
    currentContent    : CurrentContentView,
    setCurrentContent : (val : CurrentContentView) => void
};

function WebsiteHeader({className = "", currentContent, setCurrentContent} : WebsiteHeaderProps) : ReactElement {
    function setViewFunction(toContent : CurrentContentView) : () => void {
        return () => setCurrentContent(toContent); 
    }

    const selected   : CSSProperties = { "--selected" : currentContent } as CSSProperties;
    const homeButton : ReactElement  = <button className="header-home-button" onClick={setViewFunction("Home")} style={selected}>
        <h1>
            Matthew Wong
        </h1>
    </button>;
    return (
        <div className={"website-header " + className}>
            {homeButton}
        </div>
        
    );
}

export default WebsiteHeader; 