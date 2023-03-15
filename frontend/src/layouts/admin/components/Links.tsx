import React from 'react';

// chakra imports
import { Text, Box, useColorModeValue } from '@chakra-ui/react';
import NavLinkItem from './NavLink';
import { useSelector } from '@/store';

// import { rawRoutes } from '@/router/routes';

interface LinksProps {
	children?: React.ReactNode;
}

const Links: React.FC<LinksProps> = ({ children }) => {
	const { routes } = useSelector(state => state.route);

	return <CreateLinks routes={routes}></CreateLinks>;
};

export default Links;

function CreateLinks({ routes }: { routes: Array<RouteItem> }) {
	const activeColor = useColorModeValue('gray.700', 'white');

	return (
		<>
			{routes.map((route, index) => {
				if (route.children && route.children.length > 0) {
					return (
						<Box key={index}>
							<Text fontSize={'md'} color={activeColor} fontWeight="bold" mx="auto" ps={{ sm: '10px', xl: '16px' }} pt="18px" pb="12px">
								{route.path}
							</Text>
							<CreateLinks routes={route.children}></CreateLinks>
						</Box>
					);
				}
				return <NavLinkItem key={index} route={route}></NavLinkItem>;
			})}
		</>
	);
}
