import React from 'react';
import { LoadingLayout } from '@/layouts/admin';
import { Outlet } from 'react-router-dom';

interface BlankProps {
	children?: React.ReactNode;
}

const Blank: React.FC<BlankProps> = ({ children }) => {
	return (
		<React.Suspense fallback={<LoadingLayout />}>
			<Outlet></Outlet>
		</React.Suspense>
	);
};

export default Blank;
