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
        <div className={"tab-group " + className + " " + groupName}>
            <h4>{groupName}</h4>
            {childrenWithContext}
        </div>
    )
}

export default TabGroup;