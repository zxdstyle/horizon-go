import React from 'react';
// Chakra imports
import { Box, Button, Flex, Text, useColorModeValue, StyleProps } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
// Custom components
import BarChart from '@/components/charts/BarChart';
import { barChartDataConsumption, barChartOptionsConsumption } from '@/variables/charts';

import SvgIcon from '@/components/common/icon/SvgIcon';

interface WeeklyRevenueProps extends StyleProps {
	children?: React.ReactNode;
}

const WeeklyRevenue: React.FC<WeeklyRevenueProps> = ({ children, ...rest }) => {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });
	return (
		<Card textAlign="center" direction="column" w="100%" {...rest}>
			<Flex align="center" w="100%" px="15px" py="10px">
				<Text me="auto" color={textColor} fontSize="xl" fontWeight="700" lineHeight="100%">
					Weekly Revenue
				</Text>
				<Button textAlign="center" justifyContent="center" bg={bgButton} _hover={bgHover} _focus={bgFocus} _active={bgFocus} w="37px" h="37px" lineHeight="100%" borderRadius="10px" {...rest}>
					<SvgIcon icon="mdi:bar-chart" color={iconColor} w="24px" h="24px" />
				</Button>
			</Flex>

			<Box h="240px" mt="auto">
				<BarChart chartData={barChartDataConsumption} chartOptions={barChartOptionsConsumption} />
			</Box>
		</Card>
	);
};

export default WeeklyRevenue;
