import React from 'react';

interface InvalidPageProps {
	children?: React.ReactNode;
	route: RouteItem;
}

const InvalidPage: React.FC<InvalidPageProps> = ({ children, route }) => {
	return <div>{JSON.stringify(route)}</div>;
};

export default InvalidPage;
