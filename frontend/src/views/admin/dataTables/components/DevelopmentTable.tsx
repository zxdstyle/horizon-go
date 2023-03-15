import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import { Card } from '@chakra-ui/react';
import Menu from '@/components/menu/MainMenu';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/common/table/DataTable';

interface DevelopmentTableProps {
	children?: React.ReactNode;
	columnsData: ColumnDef<any, any>[];
	tableData: Array<any>;
}

const DevelopmentTable: React.FC<DevelopmentTableProps> = ({ children, tableData, columnsData }) => {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px="25px" justify="space-between" mb="20px" align="center">
				<Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
					Development Table
				</Text>
				<Menu />
			</Flex>

			<DataTable columnsData={columnsData} tableData={tableData} />
		</Card>
	);
};

export default DevelopmentTable;
