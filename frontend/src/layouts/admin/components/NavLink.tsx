import React from 'react';
import { Box, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@/components/common/icon/SvgIcon';

interface NavLinkProps {
	children?: React.ReactNode;
	route: RouteItem;
}

const NavLinkItem: React.FC<NavLinkProps> = ({ route: { meta, path, children } }) => {
	const activeIcon = useColorModeValue('brand.500', 'white');
	const textColor = useColorModeValue('secondaryGray.500', 'white');
	const brandColor = useColorModeValue('brand.500', 'brand.400');
	const activeColor = useColorModeValue('gray.700', 'white');

	return (
		<NavLink to={path}>
			{({ isActive }) => {
				return (
					<HStack spacing={isActive ? '22px' : '26px'} py="5px" ps="10px">
						<Flex w="100%" alignItems="center" justifyContent="center">
							{meta.icon && (
								<Box color={isActive ? activeIcon : textColor} me="18px">
									<SvgIcon icon={meta?.icon as string} size={6} />
								</Box>
							)}
							<Text me="auto" color={isActive ? activeColor : textColor} fontWeight={isActive ? 'bold' : 'normal'}>
								{meta?.title}
							</Text>
						</Flex>
						<Box h="36px" w="4px" bg={isActive ? brandColor : 'transparent'} borderRadius="5px" />
					</HStack>
				);
			}}
		</NavLink>
	);
};

export default NavLinkItem;
