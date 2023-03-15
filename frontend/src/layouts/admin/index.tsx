import React, { useState } from 'react';

// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from '@/components/footer/FooterAdmin.js';

// Layout components
import Navbar from '@/components/navbar/NavbarAdmin';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import Loading from '@/components/common/loader/Loading';
import SidebarToggleContext from '@/components/navbar/context/SidebarToggleContext';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
	// states and functions
	const [fixed] = useState(false);

	const { onOpen } = useDisclosure();
	return (
		<SidebarToggleContext>
			<Sidebar {...rest} />

			<Box
				float="right"
				minHeight="100vh"
				height="100%"
				overflow="auto"
				position="relative"
				maxHeight="100%"
				w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
				maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
				transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
				transitionDuration=".2s, .2s, .35s"
				transitionProperty="top, bottom, width"
				transitionTimingFunction="linear, linear, ease"
			>
				<Portal>
					<Box>
						<Navbar onOpen={onOpen} logoText={'Horizon UI Dashboard PRO'} brandText="" secondary={false} message="" fixed={fixed} {...rest} />
					</Box>
				</Portal>

				<Box as="main" minH="full" display="flex" flexDir="column">
					<Box mx="auto" p={{ base: '20px', md: '30px' }} pe="20px" w="full" h="full" pt={{ base: '180px', md: '130px', xl: '130px' }} flex="1 1 auto">
						{children}
					</Box>

					<Footer />
				</Box>
			</Box>
		</SidebarToggleContext>
	);
};

export default function AdminLayout() {
	return (
		<Layout>
			<Outlet></Outlet>
		</Layout>
	);
}

export function LoadingLayout() {
	return (
		<Layout>
			<Loading></Loading>
		</Layout>
	);
}
