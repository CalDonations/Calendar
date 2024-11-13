import { createContext, useContext, useState, ReactNode } from 'react';

interface CollapseContextType {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

const CollapseContext = createContext<CollapseContextType | undefined>(undefined);

interface CollapseProviderProps {
    children: ReactNode;
}

export function CollapseProvider({ children }: CollapseProviderProps) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed(prev => !prev);

    return (
        <CollapseContext.Provider value={{ collapsed, toggleCollapsed }}>
            {children}
        </CollapseContext.Provider>
    );
}

export function useCollapse() {
    const context = useContext(CollapseContext);
    if (context === undefined) {
        throw new Error('useCollapse must be used within a CollapseProvider');
    }
    return context;
}