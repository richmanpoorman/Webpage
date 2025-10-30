import { createContext, type ReactNode } from 'react';

// setCurrentComponent(newComponent), switchTo(onSwitchOffOf), depth
let initialContext : [
    (setComponent : ReactNode) => void,                             // Allows tab to set the content
    (onTabSelect: () => void, onTabDeselect: () => void) => void,   // Function that calls "on switch" (onSwitch)
    number
] = [
    (setComponent : ReactNode) => {}, 
    (onTabSelect: () => void, onTabDeselect: () => void) => {}, 
    0
];

export const TabContext = createContext(initialContext);