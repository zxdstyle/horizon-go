import { createContext } from 'react';

export const tableContext = createContext<TableContext | null>(null);

export const { Provider } = tableContext;
