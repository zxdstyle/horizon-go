import React, { useEffect } from 'react';
import { RootState, useDispatch, useSelector } from '@/store';

import { loadRoutes } from '@/store/modules/route';

import { useDynamicRoutes } from './routes';

const Provider: React.FC = () => {
	// * Dynamic Router
	const { routes, loaded } = useSelector((state: RootState) => state.route);

	const dispatch = useDispatch();

	useEffect(() => {
		if (loaded) return;
		dispatch(loadRoutes());
	}, []);

	return <>{useDynamicRoutes(routes)}</>;
};

export default Provider;
