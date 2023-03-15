import { Card, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

// Custom components
import Menu from '@/components/menu/MainMenu';
import DataTable from '@/components/common/table/DataTable';

interface CheckTableProps {
	children?: React.ReactNode;
	columnsData: ColumnDef<any, any>[];
	tableData: Array<any>;
}

const CheckTable: React.FC<CheckTableProps> = ({ children, columnsData, tableData }) => {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px="25px" justify="space-between" mb="20px" align="center">
				<Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
					Check Table
				</Text>
				<Menu />
			</Flex>
			<DataTable columnsData={columnsData} tableData={tableData} />
		</Card>
	);
};

export default CheckTable;
