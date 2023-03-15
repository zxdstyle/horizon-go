import React from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface RouterLinkProps extends LinkProps {
	children?: React.ReactNode;
	to: string;
}

const RouterLink: React.FC<RouterLinkProps> = ({ children, to }) => {
	return (
		<Link as={ReactRouterLink} to={to}>
			{children}
		</Link>
	);
};

export default RouterLink;
