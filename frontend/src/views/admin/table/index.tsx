import React from 'react';
import { Card, Box, Button } from '@chakra-ui/react';
import DataTable from '@/components/table';
import { ColumnDef } from '@tanstack/react-table';

interface IndexProps {
	children?: React.ReactNode;
}

function CreateButton() {
	return <Button variant="action">Create</Button>;
}

const Index: React.FC<IndexProps> = ({ children }) => {
	const columns: ColumnDef<Connection>[] = [
		{ header: 'id', accessorKey: 'id' },
		{ header: 'username', accessorKey: 'username' },
		{ header: 'created_at', accessorKey: 'created_at' },
		{ header: 'updated_at', accessorKey: 'updated_at' },
		{ header: 'action', accessorKey: 'action' },
	];

	return (
		<Box w="full">
			<Card>
				<DataTable columns={columns} api="api/v1/users" toolbar={{ customTool: <CreateButton></CreateButton> }}></DataTable>
			</Card>
		</Box>
	);
};

export default Index;
