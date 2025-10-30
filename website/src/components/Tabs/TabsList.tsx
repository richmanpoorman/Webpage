import { Children, useState, type ReactElement, type ReactNode } from "react";
import type { CSSProperties } from "react";
import { TabContext } from "./TabContext";
import "./TabsList.css"
import { type TabProps } from "./Tab";

type TabsListProps = {
    className?    : string, 
    children      : ReactElement[], 
    initialIndex? : number,
    showInitial?  : boolean
};

function TabsList({className, children, initialIndex = 0, showInitial = true} : TabsListProps) : ReactElement {
    if (Children.count(children) < 1) return <></>; 
    if (Children.count(children) == 1) { 
        return ( 
            <div className={"tabs-list " + className}>
                <div className="tabs-current-content">
                    { (children[initialIndex].props as TabProps).children }
                </div> 
            </div>
        );
    }
    
    const initialTabShown : ReactNode = showInitial ? (children[initialIndex].props as TabProps).children : <></>;
    const [currentTab, setCurrentTab] = useState<ReactNode>(initialTabShown); 
    const [tabIndex  , setTabIndex]   = useState<number>(initialIndex);

    const selectedTabCSS : CSSProperties = { "--tab-index" : tabIndex } as CSSProperties; 
    const childrenWithContext : ReactElement[] = children.map( (tab : ReactElement, index : number) => {

        return (
            <TabContext value={[setCurrentTab, () => setTabIndex(index)]}>
                {tab}
            </TabContext>
        );
    });
    return (
        <div className={"tabs-list " + className} style={selectedTabCSS}>
            <div className="tabs-bar">
                {childrenWithContext}
            </div>
            <div className="tabs-current-content">
                {currentTab}
            </div>
            
        </div>
    );
}

export default TabsList;