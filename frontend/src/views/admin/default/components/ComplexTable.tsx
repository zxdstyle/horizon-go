import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

// Custom components
import { Card } from '@chakra-ui/react';
import Menu from '@/components/menu/MainMenu';

// Assets
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/common/table/DataTable';

type ComplexTableProps = {
	children?: React.ReactNode;
	columnsData: ColumnDef<any, any>[];
	tableData: Array<any>;
};

const ComplexTable: React.FC<ComplexTableProps> = ({ children, columnsData, tableData }) => {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Card direction="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px="25px" justify="space-between" mb="10px" align="center">
				<Text color={textColor} fontSize="22px" fontWeight="700" lineHeight="100%">
					Complex Table
				</Text>
				<Menu />
			</Flex>

			<DataTable columnsData={columnsData} tableData={tableData} />
		</Card>
	);
};

export default ComplexTable;
