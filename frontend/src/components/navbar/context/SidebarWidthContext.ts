import { createContext } from 'react';

export const sidebarWidthContext = createContext(0);

export const { Provider, Consumer } = sidebarWidthContext;
