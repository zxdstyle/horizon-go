import React from 'react';
import { Link } from 'react-router-dom';
// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';

interface BrandProps {
	children?: React.ReactNode;
}

const Brand: React.FC<BrandProps> = ({ children }) => {
	//   Chakra color mode
	const logoColor = useColorModeValue('navy.700', 'white');

	return (
		<Flex align="center" direction="column">
			<Link to="/">
				<HorizonLogo h="26px" w="175px" my="32px" color={logoColor} />
			</Link>
			<HSeparator mb="20px" />
		</Flex>
	);
};

export default Brand;
