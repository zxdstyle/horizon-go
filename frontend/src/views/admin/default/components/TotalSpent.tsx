import React from 'react';
// Chakra imports
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import { Card } from '@chakra-ui/react';
import LineChart from '@/components/charts/LineChart';
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '@/variables/charts';
import SvgIcon from '@/components/common/icon/SvgIcon';

interface TotalSpentProps {
	children?: React.ReactNode;
}

const TotalSpent: React.FC<TotalSpentProps> = ({ children, ...rest }) => {
	// Chakra Color Mode

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	const bgHover = useColorModeValue({ bg: 'secondaryGray.400' }, { bg: 'whiteAlpha.50' });
	const bgFocus = useColorModeValue({ bg: 'secondaryGray.300' }, { bg: 'whiteAlpha.100' });

	return (
		<Card justifyContent="center" textAlign="center" direction="column" w="100%" mb="0px" {...rest}>
			<Flex justify="space-between" ps="0px" pe="20px" pt="5px">
				<Flex align="center" w="100%">
					<Button bg={boxBg} fontSize="sm" fontWeight="500" color={textColorSecondary} borderRadius="7px">
						<SvgIcon icon="mdi:calendar-today-outline" color={textColorSecondary} me="4px" />
						This month
					</Button>
					<Button ms="auto" textAlign="center" justifyContent="center" bg={bgButton} _hover={bgHover} _focus={bgFocus} _active={bgFocus} w="37px" h="37px" lineHeight="100%" borderRadius="10px" {...rest}>
						<SvgIcon icon="mdi:bar-chart" color={iconColor} w="24px" h="24px" />
					</Button>
				</Flex>
			</Flex>
			<Flex w="100%" flexDirection={{ base: 'column', lg: 'row' }}>
				<Flex flexDirection="column" me="20px" mt="28px">
					<Text color={textColor} fontSize="34px" textAlign="start" fontWeight="700" lineHeight="100%">
						$37.5K
					</Text>
					<Flex align="center" mb="20px">
						<Text color="secondaryGray.600" fontSize="sm" fontWeight="500" mt="4px" me="12px">
							Total Spent
						</Text>
						<Flex align="center">
							<SvgIcon icon="mdi:menu-up" color="green.500" me="2px" mt="2px" />
							<Text color="green.500" fontSize="sm" fontWeight="700">
								+2.45%
							</Text>
						</Flex>
					</Flex>

					<Flex align="center">
						<SvgIcon icon="mdi:checkbox-marked-circle" color="green.500" me="4px" />
						<Text color="green.500" fontSize="md" fontWeight="700">
							On track
						</Text>
					</Flex>
				</Flex>
				<Box minH="260px" minW="75%" mt="auto">
					<LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
				</Box>
			</Flex>
		</Card>
	);
};

export default TotalSpent;
