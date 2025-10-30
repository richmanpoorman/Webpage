import { createContext, type ReactNode } from 'react';

let initialContext : [(setComponent : ReactNode) => void, () => void ] = [(setComponent : ReactNode) => {}, () => {}];

export const TabContext = createContext(initialContext);