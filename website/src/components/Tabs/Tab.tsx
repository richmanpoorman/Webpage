import { useContext, type ReactElement, type ReactNode } from "react";
import { TabContext } from "./TabContext";
import "./Tab.css"

export type TabProps = {
    className? : string, 
    tabName    : string, 
    children   : ReactNode
};

function Tab({className = "", tabName, children} : TabProps) : ReactElement {
    const [setData, setActive] = useContext(TabContext)

    function onClick() : void {
        setData(children); 
        setActive(); 
    }

    return <button className={"tab " + className} onClick={onClick}>
        {tabName}
    </button>
}

export default Tab;