import React from 'react';

// Chakra imports
import { Box, StyleProps, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { Card } from '@chakra-ui/react';

interface InformationProps extends StyleProps {
	children?: React.ReactNode;
	title: string;
	value: string;
}

const Information: React.FC<InformationProps> = ({ children, title, value, ...rest }) => {
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const bg = useColorModeValue('white', 'navy.700');
	return (
		<Card bg={bg} {...rest}>
			<Box>
				<Text fontWeight="500" color={textColorSecondary} fontSize="sm">
					{title}
				</Text>
				<Text color={textColorPrimary} fontWeight="500" fontSize="md">
					{value}
				</Text>
			</Box>
		</Card>
	);
};

export default Information;
