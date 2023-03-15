import React from 'react';

// Chakra imports
import { Box, Flex, Progress, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { Card } from '@chakra-ui/react';
import IconBox from '@/components/icons/IconBox';
import Menu from '@/components/menu/MainMenu';
import SvgIcon from '@/components/common/icon/SvgIcon';

interface StorageProps {
	children?: React.ReactNode;
	used: number;
	total: number;
}

const Storage: React.FC<StorageProps> = ({ children, used, total }) => {
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	const textColorSecondary = 'gray.400';
	const box = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Card mb={{ base: '0px', lg: '20px' }} textAlign="center">
			<Flex w="100%">
				<Menu ms="auto" />
			</Flex>

			<IconBox mx="auto" h="100px" w="100px" icon={<SvgIcon icon="ic:outline-cloud-done" color={brandColor} h="46px" w="46px" />} bg={box} />
			<Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px">
				Your storage
			</Text>
			<Text color={textColorSecondary} fontSize="md" maxW={{ base: '100%', xl: '80%', '3xl': '60%' }} mx="auto">
				Supervise your drive space in the easiest way
			</Text>
			<Box w="100%" mt="auto">
				<Flex w="100%" justify="space-between" mb="10px">
					<Text color={textColorSecondary} fontSize="sm" maxW="40%">
						{used} GB
					</Text>
					<Text color={textColorSecondary} fontSize="sm" maxW="40%">
						{total} GB
					</Text>
				</Flex>
				<Progress textAlign="start" colorScheme="brandScheme" value={(used / total) * 100} w="100%" />
			</Box>
		</Card>
	);
};

export default Storage;
