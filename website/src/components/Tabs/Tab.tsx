import { useContext, type ReactElement, type ReactNode } from "react";
import { TabContext } from "./TabContext";
import "./Tab.css"

export type TabProps = {
    className? : string, 
    tabName    : string, 
    children   : ReactNode
};

function Tab({className = "", tabName, children} : TabProps) : ReactElement {
    const [setData, onSwitch, _depth] = useContext(TabContext)

    function onTabSelect() : void {
        console.log("Setting data");
        setData(children); 
    }

    function onTabDeselect() : void {
        console.log("Unselecting value")
    }

    return <button className={"tab " + className} onClick={() => onSwitch(onTabSelect, onTabDeselect)}>
        {tabName}
    </button>
}

export default Tab;