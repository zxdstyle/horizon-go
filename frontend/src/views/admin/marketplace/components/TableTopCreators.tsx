import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import DataTable from '@/components/common/table/DataTable';
import { ColumnDef } from '@tanstack/react-table';

interface TableTopCreatorsProps {
	children?: React.ReactNode;
	columnsData: ColumnDef<any, any>[];
	tableData: Array<any>;
}

const TableTopCreators: React.FC<TableTopCreatorsProps> = ({ children, columnsData, tableData }) => {
	const textColor = useColorModeValue('navy.700', 'white');

	return (
		<>
			<Flex direction="column" w="100%" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
				<Flex align={{ sm: 'flex-start', lg: 'center' }} justify="space-between" w="100%" px="22px" pb="20px" mb="10px" boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)">
					<Text color={textColor} fontSize="xl" fontWeight="600">
						Top Creators
					</Text>
					<Button variant="action">See all</Button>
				</Flex>

				<DataTable columnsData={columnsData} tableData={tableData} />
			</Flex>
		</>
	);
};

export default TableTopCreators;
