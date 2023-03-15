import React from 'react';

// Chakra imports
import { Box, Flex, Text, useColorModeValue, StyleProps } from '@chakra-ui/react';
import BarChart from '@/components/charts/BarChart';

// Custom components
import { Card } from '@chakra-ui/react';
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '@/variables/charts';

// Assets
import SvgIcon from '@/components/common/icon/SvgIcon';

interface DailyTrafficProps extends StyleProps {
	children?: React.ReactNode;
}

const DailyTraffic: React.FC<DailyTrafficProps> = ({ children, ...rest }) => {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card textAlign="center" direction="column" w="100%" {...rest}>
			<Flex justify="space-between" align="start" px="10px" pt="5px">
				<Flex flexDirection="column" align="start" me="20px">
					<Flex w="100%">
						<Text me="auto" color="secondaryGray.600" fontSize="sm" fontWeight="500">
							Daily Traffic
						</Text>
					</Flex>
					<Flex align="end">
						<Text color={textColor} fontSize="34px" fontWeight="700" lineHeight="100%">
							2.579
						</Text>
						<Text ms="6px" color="secondaryGray.600" fontSize="sm" fontWeight="500">
							Visitors
						</Text>
					</Flex>
				</Flex>
				<Flex align="center">
					<SvgIcon icon="mdi:menu-up" color="green.500" />
					<Text color="green.500" fontSize="sm" fontWeight="700">
						+2.45%
					</Text>
				</Flex>
			</Flex>
			<Box h="240px" mt="auto">
				<BarChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
			</Box>
		</Card>
	);
};

export default DailyTraffic;