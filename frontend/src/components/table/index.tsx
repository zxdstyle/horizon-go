import React from 'react';
import { useReactTable, flexRender, getCoreRowModel, ColumnDef, getPaginationRowModel } from '@tanstack/react-table';
import { Table, Tbody, Td, Th, Thead, Tr, Box } from '@chakra-ui/react';
import Empty from './components/Empty';
import Toolbar from '@/components/table/components/Toolbar';
import useDataSource from './hooks/useDataSource';
import Loader from './components/Loader';
import { Provider as TableProvider } from './context';

import { Pagination } from '@/components/pagination';

interface DataTableProps<T = any> {
	children?: React.ReactNode;
	columns: ColumnDef<T>[];
	api: string;
	toolbar?: false | ToolbarOption;
	onPageChange?: (current: number) => void;
}

function DataTable<T = any>({ children, columns, api, toolbar, onPageChange }: DataTableProps<T>) {
	const { data, isLoading, refresh, total } = useDataSource<T>(api);

	const { getHeaderGroups, getRowModel, getCanPreviousPage, setPageSize, setPageIndex } = useReactTable<T>({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<Box>
			<TableProvider value={{ refresh }}>
				{toolbar !== false && <Toolbar {...toolbar} />}

				<Box pos="relative">
					{isLoading && <Loader pos="absolute" left={0} right={0} top={0} bottom={0} m="auto" />}

					<Table variant="simple" size="lg">
						<Thead>
							{getHeaderGroups().map((headerGroup, index) => (
								<Tr key={headerGroup.id}>
									{headerGroup.headers.map((header, index) => (
										<Th colSpan={header.colSpan} pe="10px" key={header.id}>
											{header.isPlaceholder ? null : <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>}
										</Th>
									))}
								</Tr>
							))}
						</Thead>

						<Tbody fontSize="md" fontWeight="500">
							{getRowModel().rows.map((row, index) => {
								return (
									<Tr key={row.id} borderTop={1} borderStyle="solid" borderColor="gray.200">
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

					{getRowModel().rows.length === 0 && <Empty />}

					<Pagination
						total={total}
						onPageChange={page => {
							setPageIndex(page - 1);
							if (onPageChange) onPageChange(page);
						}}
					/>
				</Box>
			</TableProvider>
		</Box>
	);
}

DataTable.defaultProps = {
	toolbar: {
		quickSearch: true,
	},
};

export default DataTable;
