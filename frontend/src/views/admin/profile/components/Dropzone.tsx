import React from 'react';

// Chakra imports
import { Button, Flex, Input, StyleProps, useColorModeValue } from '@chakra-ui/react';

// Assets
import { useDropzone } from 'react-dropzone';

interface DropzoneProps extends StyleProps {
	children?: React.ReactNode;
	content: React.ReactNode;
}

const Dropzone: React.FC<DropzoneProps> = ({ children, content, ...rest }) => {
	const { getRootProps, getInputProps } = useDropzone();
	const bg = useColorModeValue('gray.100', 'navy.700');
	const borderColor = useColorModeValue('secondaryGray.100', 'whiteAlpha.100');
	return (
		<Flex align="center" justify="center" bg={bg} border="1px dashed" borderColor={borderColor} borderRadius="16px" w="100%" h="max-content" minH="100%" cursor="pointer" {...getRootProps({ className: 'dropzone' })} {...rest}>
			<Input variant="main" {...getInputProps()} />
			<Button variant="no-effects">{content}</Button>
		</Flex>
	);
};

export default Dropzone;
