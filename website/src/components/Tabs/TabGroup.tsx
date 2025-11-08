import { useContext, type ReactElement } from "react";
import { TabContext } from "./TabContext";
import "./TabGroup.css"

export type TabGroupProps = {
    className? : string, 
    groupName? : string, 
    children   : ReactElement[]
};

function TabGroup({className = "", groupName, children} : TabGroupProps) : ReactElement {
    const [setData, onSwitch, depth] = useContext(TabContext)

    const childrenWithContext : ReactElement[] = children.map( (tab : ReactElement) => {

        return (
            <TabContext value={[setData, onSwitch, depth + 1]}>
                {tab}
            </TabContext>
        );
    });
    return (
        <div className={"tab-group " + className}>
            <h4 className={"tab-group-name " + className}>{groupName}</h4>
            <div className={"tab-group-tabs " + className}>
                {childrenWithContext}
            </div>
            
        </div>
    )
}

export default TabGroup;