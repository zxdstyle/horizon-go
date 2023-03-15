import React from 'react';
import { Button, Icon, useColorMode } from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

interface ToggleColorModeProps {
	children?: React.ReactNode;
}

const ToggleColorMode: React.FC<ToggleColorModeProps> = ({ children, ...rest }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgButton = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';

	return (
		<Button
			{...rest}
			h="60px"
			w="60px"
			bg={bgButton}
			zIndex="99"
			position="fixed"
			variant="no-effects"
			left={document.documentElement.dir === 'rtl' ? '35px' : ''}
			right={document.documentElement.dir === 'rtl' ? '' : '35px'}
			bottom="30px"
			border="1px solid"
			borderColor="#6A53FF"
			borderRadius="50px"
			onClick={toggleColorMode}
			display="flex"
			p="0px"
			textAlign="center"
			justifyContent="center"
		>
			<Icon h="24px" w="24px" color="white" as={colorMode === 'light' ? IoMdMoon : IoMdSunny} />
		</Button>
	);
};

export default ToggleColorMode;
