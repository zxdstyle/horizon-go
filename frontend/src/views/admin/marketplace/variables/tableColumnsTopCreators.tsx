import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Avatar, Box, Flex, Progress, Text, useColorModeValue } from '@chakra-ui/react';

export const tableColumnsTopCreators: ColumnDef<any, any>[] = [
	{
		header: 'Name',
		accessorKey: 'name',
		cell: cell => {
			const textColor = useColorModeValue('navy.700', 'white');
			return (
				<Flex align="center">
					<Avatar src={cell.getValue()[1]} w="30px" h="30px" me="8px" />
					<Text color={textColor} fontSize="sm" fontWeight="600">
						{cell.getValue()[0]}
					</Text>
				</Flex>
			);
		},
	},
	{
		header: 'Artworks',
		accessorKey: 'artworks',
		cell: cell => {
			const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
			return (
				<Text color={textColorSecondary} fontSize="sm" fontWeight="500">
					{cell.getValue()}
				</Text>
			);
		},
	},
	{
		header: 'Rating',
		accessorKey: 'rating',
		cell: cell => {
			return (
				<Box>
					<Progress variant="table" colorScheme="brandScheme" value={cell.getValue()} />
				</Box>
			);
		},
	},
];
