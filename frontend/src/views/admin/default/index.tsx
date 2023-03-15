import React from 'react';

// Chakra imports
import { Avatar, Box, Flex, FormLabel, Select, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Assets
import Usa from '@/assets/img/dashboards/usa.png';
// Custom components
import MiniCalendar from '@/components/calendar/MiniCalendar';
import MiniStatistics from '@/components/card/MiniStatistics';
import IconBox from '@/components/icons/IconBox';
import CheckTable from '@/views/admin/default/components/CheckTable';
import ComplexTable from '@/views/admin/default/components/ComplexTable';
import DailyTraffic from '@/views/admin/default/components/DailyTraffic';
import PieCard from '@/views/admin/default/components/PieCard';
import Tasks from '@/views/admin/default/components/Tasks';
import TotalSpent from '@/views/admin/default/components/TotalSpent';
import WeeklyRevenue from '@/views/admin/default/components/WeeklyRevenue';
import { columnsDataCheck, columnsDataComplex } from '@/views/admin/dataTables/variables/columnsData';
import tableDataCheck from '@/views/admin/default/variables/tableDataCheck.json';
import tableDataComplex from '@/views/admin/default/variables/tableDataComplex.json';
import SvgIcon from '@/components/common/icon/SvgIcon';
// import UserActivity from '@/views/admin/default/components/UserActivity';

export default function UserReports() {
	// Chakra Color Mode
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap="20px" mb="20px">
				<MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<SvgIcon w={6} h={6} icon="mdi:bar-chart" color={brandColor} />} />} name="Earnings" value="$350.4" />
				<MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<SvgIcon w={8} h={8} icon="mdi:attach-money" color={brandColor} />} />} name="Spend this month" value="$642.39" />
				<MiniStatistics growth="+23%" name="Sales" value="$574.34" />
				<MiniStatistics
					endContent={
						<Flex me="-16px" mt="10px">
							<FormLabel htmlFor="balance">
								<Avatar src={Usa} />
							</FormLabel>
							<Select id="balance" variant="mini" mt="5px" me="0px" defaultValue="usd">
								<option value="usd">USD</option>
								<option value="eur">EUR</option>
								<option value="gba">GBA</option>
							</Select>
						</Flex>
					}
					name="Your balance"
					value="$1,000"
				/>
				<MiniStatistics startContent={<IconBox w="56px" h="56px" bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)" icon={<SvgIcon w="28px" h="28px" icon="mdi:database-lock" color="white" />} />} name="New Tasks" value="154" />
				<MiniStatistics startContent={<IconBox w="56px" h="56px" bg={boxBg} icon={<SvgIcon w="32px" h="32px" icon="mdi:content-copy" color={brandColor} />} />} name="Total Projects" value="2935" />
			</SimpleGrid>

			<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
				<TotalSpent />
				<WeeklyRevenue />
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
				<CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
					<DailyTraffic />
					<PieCard />
				</SimpleGrid>
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
				<ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
					<Tasks />
					<MiniCalendar h="100%" minW="100%" selectRange={false} />
				</SimpleGrid>
			</SimpleGrid>
			{/*<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">*/}
			{/*	<UserActivity />*/}
			{/*<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">*/}
			{/*<Tasks />*/}
			{/*<MiniCalendar h="100%" minW="100%" selectRange={false} />*/}
			{/*</SimpleGrid>*/}
			{/*</SimpleGrid>*/}
		</Box>
	);
}
