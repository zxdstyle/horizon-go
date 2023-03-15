import React from 'react';
import { Box } from '@chakra-ui/react';

interface NotFoundProps {
	children?: React.ReactNode;
}

const NotFound: React.FC<NotFoundProps> = ({ children }) => {
	return <Box fontSize="4xl">not found</Box>;
};

export default NotFound;
