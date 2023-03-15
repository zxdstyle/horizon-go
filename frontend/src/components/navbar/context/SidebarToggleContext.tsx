import React, { createContext, useState } from 'react';

export type SidebarToggleCtx = {
	toggleSidebar: boolean;
	setToggleSidebar: (val: boolean) => void;
};

export const sidebarToggleContext = createContext<Partial<SidebarToggleCtx>>({});

export const { Provider } = sidebarToggleContext;

interface SidebarToggleContextProps {
	children?: React.ReactNode;
}

const SidebarToggleContext: React.FC<SidebarToggleContextProps> = ({ children }) => {
	const [toggleSidebar, setToggleSidebar] = useState(false);

	return <Provider value={{ toggleSidebar, setToggleSidebar }}>{children}</Provider>;
};

export default SidebarToggleContext;
