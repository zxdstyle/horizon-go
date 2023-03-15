import React from 'react';
import { Outlet } from 'react-router-dom';

// Chakra imports
import { Box, useColorModeValue } from '@chakra-ui/react';

// Layout components
import SidebarToggleContext from '@/components/navbar/context/SidebarToggleContext';

// Custom Chakra theme
export default function Auth() {
	const authBg = useColorModeValue('white', 'navy.900');
	document.documentElement.dir = 'ltr';
	return (
		<Box>
			<SidebarToggleContext>
				<Box
					bg={authBg}
					float="right"
					minHeight="100vh"
					h="full"
					position="relative"
					w="100%"
					transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
					transitionDuration=".2s, .2s, .35s"
					transitionProperty="top, bottom, width"
					transitionTimingFunction="linear, linear, ease"
				>
					<Outlet />
				</Box>
			</SidebarToggleContext>
		</Box>
	);
}
