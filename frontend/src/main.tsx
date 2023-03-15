import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/App.css';
import { ChakraProvider } from '@chakra-ui/react';
import RouterProvider from '@/router';
import theme from '@/theme/theme';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from '@/utils/request';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<QueryProvider>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<BrowserRouter>
							<RouterProvider />
						</BrowserRouter>
					</PersistGate>
				</Provider>
			</QueryProvider>
		</ChakraProvider>
	</React.StrictMode>
);
