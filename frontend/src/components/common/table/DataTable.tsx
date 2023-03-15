import React, { useMemo, useState } from 'react';
import { Table, Th, Thead, Tr, useColorModeValue, Tbody, Td } from '@chakra-ui/react';

import { PaginationState, SortingState, useReactTable, flexRender, getCoreRowModel, ColumnDef } from '@tanstack/react-table';

interface DataTableProps {
	children?: React.ReactNode;
	columnsData: ColumnDef<any, any>[];
	tableData: Array<any>;
}

const DataTable: React.FC<DataTableProps> = ({ children, columnsData, tableData }) => {
	const columns = useMemo(() => columnsData, [columnsData]);
	const data = useMemo(() => tableData, [tableData]);

	const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

	const [sorting, setSorting] = useState<SortingState>([]);

	const [globalFilter, setGlobalFilter] = useState('');

	const { getHeaderGroups, getRowModel } = useReactTable({
		columns,
		data,
		state: {
			pagination,
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		onPaginationChange: setPagination,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		manualPagination: true,
		debugTable: true,
	});

	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

	return (
		<Table variant="simple" color="gray.500" mb="24px">
			<Thead>
				{getHeaderGroups().map((headerGroup, index) => (
					<Tr key={headerGroup.id}>
						{headerGroup.headers.map((header, index) => (
							<Th colSpan={header.colSpan} pe="10px" key={header.id} borderColor={borderColor}>
								{header.isPlaceholder ? null : <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>}
							</Th>
						))}
					</Tr>
				))}
			</Thead>
			<Tbody>
				{getRowModel().rows.map((row, index) => {
					return (
						<Tr key={row.id}>
							{row.getVisibleCells().map((cell, index) => {
								return (
									<Td key={cell.id} fontSize={{ sm: '14px' }} minW={{ sm: '150px', md: '200px', lg: 'auto' }} borderColor="transparent">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</Td>
								);
							})}
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	);
};

export default DataTable;
