import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

interface HSeparatorProps extends FlexProps {
	children?: React.ReactNode;
}

const HSeparator: React.FC<HSeparatorProps> = ({ children, ...rest }) => {
	return <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" {...rest}></Flex>;
};

interface VSeparatorProps extends FlexProps {
	children?: React.ReactNode;
}

const VSeparator: React.FC<VSeparatorProps> = ({ children, ...rest }) => {
	return <Flex w="1px" bg="rgba(135, 140, 189, 0.3)" {...rest}></Flex>;
};

export { HSeparator, VSeparator };
