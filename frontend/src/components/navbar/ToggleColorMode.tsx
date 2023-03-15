import React from 'react';
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import SvgIcon from '@/components/common/icon/SvgIcon';

interface ToggleColorModeProps {
	children?: React.ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children }) => {
	const { toggleColorMode, colorMode } = useColorMode();

	const color = useColorModeValue('gray.400', 'white');

	return (
		<Box color={color} me="10px" onClick={toggleColorMode} cursor="pointer">
			{colorMode === 'light' ? <SvgIcon icon="ph:moon-bold" size={4} /> : <SvgIcon icon="ph:sun-bold" size={4} />}
		</Box>
	);
};

export default ToggleColorMode;
