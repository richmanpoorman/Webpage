import type { ReactElement, CSSProperties } from "react";
import type { CurrentContentView } from "../SiteGrid/SiteGrid";

type WebsiteHeaderProps = {
    className?        : string
};

function WebsiteHeader({className = ""} : WebsiteHeaderProps) : ReactElement {
    
    return (
        <div className={"website-header " + className}>
            <h1>Matthew Wong</h1>
        </div>
        
    );
}

export default WebsiteHeader; 