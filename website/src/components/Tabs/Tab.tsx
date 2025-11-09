import { useContext, useState, type ReactElement, type ReactNode } from "react";
import { TabContext } from "./TabContext";
import "./Tab.css"

export type TabProps = {
    className?  : string, 
    tabName     : string, 
    children    : ReactNode
};

function Tab({className = "", tabName, children} : TabProps) : ReactElement {
    const [setData, onSwitch, _depth] = useContext(TabContext)
    const [selected, setSelected] = useState<boolean>(false);

    function onTabSelect() : void {
        console.log("Setting data");
        setSelected(true);
        setData(children); 
    }

    function onTabDeselect() : void {
        console.log("Unselecting value")
        setSelected(false);
    }

    const selectionClass : string = selected ? "tab-selected" : "tab-not-selected";

    return <button className={"tab " + className + " " + selectionClass} onClick={() => onSwitch(onTabSelect, onTabDeselect)}>
        {tabName}
    </button>
}

export default Tab;