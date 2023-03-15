import React, { useRef } from 'react';

import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { IoMenuOutline } from 'react-icons/io5';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { renderThumb, renderTrack, renderView } from '@/components/scrollbar/Scrollbar';
import Content from '@/components/sidebar/components/Content';

interface SidebarResponsiveProps {
	children?: React.ReactNode;
	logo?: React.ReactNode;
	logoText?: string;
	secondary?: boolean;
}

const SidebarResponsive: React.FC<SidebarResponsiveProps> = ({ children }) => {
	const sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
	const menuColor = useColorModeValue('gray.400', 'white');
	// // SIDEBAR
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);

	// let isWindows = navigator.platform.startsWith("Win");
	//  BRAND

	return (
		<Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
			<Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
				<Icon as={IoMenuOutline} color={menuColor} my="auto" w="20px" h="20px" me="10px" _hover={{ cursor: 'pointer' }} />
			</Flex>
			<Drawer isOpen={isOpen} onClose={onClose} placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'} finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent w="285px" maxW="285px" bg={sidebarBackgroundColor}>
					<DrawerCloseButton zIndex="3" _focus={{ boxShadow: 'none' }} _hover={{ boxShadow: 'none' }} />
					<DrawerBody maxW="285px" px="0rem" pb="0">
						<Scrollbars autoHide renderTrackVertical={renderTrack} renderThumbVertical={renderThumb} renderView={renderView}>
							<Content />
						</Scrollbars>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default SidebarResponsive;
