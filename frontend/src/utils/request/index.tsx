import React, { ReactNode } from 'react';
import { createRequest } from './request';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const request = createRequest({ baseURL: '/' });

const queryClient = new QueryClient();

const QueryProvider = ({ children }: { children: ReactNode }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { request, QueryProvider };
