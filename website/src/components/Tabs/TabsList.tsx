import { Children, useState, type ReactElement, type ReactNode } from "react";
import { TabContext } from "./TabContext";
import "./TabsList.css"
import Tab, { type TabProps } from "./Tab";
import type { TabGroupProps } from "./TabGroup";
import TabGroup from "./TabGroup";

type TabsListProps = {
    className?    : string, 
    children      : ReactElement[], 
    showInitial?  : boolean
};

function TabsList({className, children, showInitial = true} : TabsListProps) : ReactElement {
    if (Children.count(children) < 1) return <></>; 
    if (Children.count(children) == 1) { 
        return ( 
            <div className={"tabs-list " + className}>
                <div className="tabs-current-content">
                    { getFirstTab(children) }
                </div> 
            </div>
        );
    }
    
    const initialTabShown : ReactNode = showInitial ? getFirstTab(children) : <></>;
    const [currentTab           , setCurrentTab           ] = useState<ReactNode>(initialTabShown); 
    const [onPreviousTabDeselect, setOnPreviousTabDeselect] = useState<() => void>(() => () => {}); // Does something when the tab switches off to the new tab

    function onTabSwitch(onTabSelect : () => void, onTabDeselect : () => void) : void {
        onPreviousTabDeselect(); 
        onTabSelect(); 
        setOnPreviousTabDeselect(() => onTabDeselect);
    }

    const childrenWithContext : ReactElement[] = children.map( (tab : ReactElement) => {

        return (
            <TabContext value={[setCurrentTab, onTabSwitch, 0]}>
                {tab}
            </TabContext>
        );
    });
    return (
        <div className={"tabs-list " + className}>
            <div className="tabs-bar">
                {childrenWithContext}
            </div>
            <div className="tabs-current-content">
                {currentTab}
            </div>
            
        </div>
    );
}

function getFirstTab(children : ReactElement[]) : ReactElement {
    if (children.length == 0) return <></>; 
    const firstElement : ReactElement = children[0]; 
    if (firstElement.type == Tab) return <>{(firstElement.props as TabProps).children}</>
    else if (firstElement.type == TabGroup) return getFirstTab((firstElement.props as TabGroupProps).children);
    return <>{children}</>;
}

export default TabsList;