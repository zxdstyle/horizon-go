import React from 'react';
// Chakra imports
import { Box, Flex, Text, useColorModeValue, Checkbox } from '@chakra-ui/react';
// Custom components
import { Card } from '@chakra-ui/react';
import Menu from '@/components/menu/MainMenu';
import IconBox from '@/components/icons/IconBox';
import SvgIcon from '@/components/common/icon/SvgIcon';

type TasksProps = {
	children?: React.ReactNode;
};

const DrapIcon = () => <SvgIcon icon="mdi:drag" color="secondaryGray.600" w="24px" h="24px" ms="auto" />;

const Tasks: React.FC<TasksProps> = ({ children, ...rest }) => {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'navy.700');
	const brandColor = useColorModeValue('brand.500', 'brand.400');
	return (
		<Card p="20px" textAlign="center" direction="column" w="100%" {...rest}>
			<Flex alignItems="center" w="100%" mb="30px">
				<IconBox me="12px" w="38px" h="38px" bg={boxBg} icon={<SvgIcon icon="mdi:checkbox-marked" color={brandColor} w="24px" h="24px" />} />

				<Text color={textColor} fontSize="lg" fontWeight="700">
					Tasks
				</Text>
				<Menu ms="auto" />
			</Flex>
			<Box px="11px">
				<Flex mb="20px">
					<Checkbox me="16px" colorScheme="brandScheme" />
					<Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
						Landing Page Design
					</Text>
					<DrapIcon />
				</Flex>
				<Flex mb="20px">
					<Checkbox me="16px" defaultChecked colorScheme="brandScheme" />
					<Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
						Dashboard Builder
					</Text>
					<DrapIcon />
				</Flex>
				<Flex mb="20px">
					<Checkbox defaultChecked me="16px" colorScheme="brandScheme" />
					<Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
						Mobile App Design
					</Text>
					<DrapIcon />
				</Flex>
				<Flex mb="20px">
					<Checkbox me="16px" colorScheme="brandScheme" />
					<Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
						Illustrations
					</Text>
					<DrapIcon />
				</Flex>
				<Flex mb="20px">
					<Checkbox defaultChecked me="16px" colorScheme="brandScheme" />
					<Text fontWeight="bold" color={textColor} fontSize="md" textAlign="start">
						Promotional LP
					</Text>
					<DrapIcon />
				</Flex>
			</Box>
		</Card>
	);
};

export default Tasks;
