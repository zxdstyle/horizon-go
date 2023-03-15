import React from 'react';
import { RouteObject } from 'react-router-dom';
import Blank from '@/layouts/blank';
import Login from '@/views/auth/login';
import Exception from '@/views/exception/Exception';
import NotFound from '@/views/exception/NotFound';

const rootRoute: RouteObject = {
	path: '/',
	element: <Blank />,
	errorElement: <Exception />,
};

const constRoutes: RouteObject[] = [
	{
		...rootRoute,
		children: [
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '',
				element: <NotFound />,
			},
		],
	},
];

export { rootRoute, constRoutes };
