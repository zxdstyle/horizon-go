import React from 'react';

// Chakra imports
import { Box, Flex, Select, Text, useColorModeValue } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
// Custom components
import BarChart from '@/components/charts/BarChart';
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '@/variables/charts';

interface UserActivityProps {
	children?: React.ReactNode;
}

const UserActivity: React.FC<UserActivityProps> = ({ children, ...rest }) => {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card textAlign="center" direction="column" w="100%" {...rest}>
			<Flex align="center" w="100%" px="15px" py="10px">
				<Text me="auto" color={textColor} fontSize="xl" fontWeight="700" lineHeight="100%">
					User Activity
				</Text>
				<Select id="user_type" w="unset" variant="transparent" display="flex" alignItems="center" defaultValue="Weekly">
					<option value="Weekly">Weekly</option>
					<option value="Daily">Daily</option>
					<option value="Monthly">Monthly</option>
				</Select>
			</Flex>

			<Box h="240px" mt="auto">
				<BarChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
			</Box>
		</Card>
	);
};

export default UserActivity;
